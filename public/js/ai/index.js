import * as tf from '@tensorflow/tfjs';
import * as tfd from '@tensorflow/tfjs-data';
import {ControllerDataset} from "./controller_dataset";
import Controller, {CONTROLLERS, TOTAL_LABELS} from "./controller";
import UI from "./ui";

window.log = console.log

// The number of classes we want to predict. In this example, we will be
// predicting 4 classes for up, down, left, and right.
const NUM_CLASSES = TOTAL_LABELS;
const TAKE_IMG_INTERVAL = 200

// The dataset object where we will store activations.
const controllerDataset = new ControllerDataset(NUM_CLASSES)

// A webcam iterator that generates Tensors from the images from the webcam.
let webcam;
let truncatedMobileNet;
let model;
let controller
let ui

// Loads mobilenet and returns a model that returns the internal activation
// we'll use as input to our classifier model.
async function loadTruncatedMobileNet() {
    // Src: https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md

    const mobilenet = await tf.loadLayersModel(
        'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json')
    // 除了json文件本身，还会加载 50+ 权重值文件
    // mobilenet.summary()  // 打印 Layer (type) ，params 等数据

    // Return a model that outputs an internal activation.
    const layer = mobilenet.getLayer('conv_pw_13_relu');
    return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
}

async function init() {
    try {
        webcam = await tfd.webcam(document.getElementById('webcam'));
    } catch (e) {
        console.log(e);
        // document.getElementById('no-webcam').style.display = 'block';
    }
    truncatedMobileNet = await loadTruncatedMobileNet();

    // ui.init();
    ui = new UI()

    // Warm up the model. This uploads weights to the GPU and compiles the WebGL
    // programs so the first time we collect data from the webcam it will be
    // quick.
    const screenShot = await webcam.capture();
    truncatedMobileNet.predict(screenShot.expandDims(0));
    screenShot.dispose();

    controller = new Controller()
}

init()

/**
 * Captures a frame from the webcam and normalizes it between -1 and 1.
 * Returns a batched image (1-element batch) of shape [1, w, h, c].
 */
async function getImage() {
    const img = await webcam.capture();
    const processedImg =
        tf.tidy(() => img.expandDims(0).toFloat().div(127).sub(1));
    // log('processedImg = ', processedImg)
    /* processedImg =
    dataId: {id: 1470}
    dtype: "float32"
    id: 1110
    isDisposedInternal: true
    kept: false
    rankType: "4"
    scopeId: 1415
    shape: (4) [1, 224, 224, 3]
    size: 150528
    strides: (3) [150528, 672, 3]
    */
    img.dispose();
    return processedImg;
}

async function setExampleHandler(label, key) {
    let img = await getImage();

    // const ret = truncatedMobileNet.predict(img)
    // console.log(ret)
    controllerDataset.addExample(truncatedMobileNet.predict(img), label);

    ui.drawThumb(img, label, key)
    img.dispose();
}

function addClickListenerToEl(id, listener) {
    const el = document.getElementById(id)
    if (el) {
        el.addEventListener('click', listener)
    }
}

async function train() {
    if (controllerDataset.xs == null) {
        throw new Error('Add some examples before training!');
    }

    // Creates a 2-layer fully connected model. By creating a separate model,
    // rather than adding layers to the mobilenet model, we "freeze" the weights
    // of the mobilenet model, and only train weights from the new model.
    model = tf.sequential({
        layers: [
            // Flattens the input to a vector so we can use it in a dense layer. While
            // technically a layer, this only performs a reshape (and has no training
            // parameters).
            tf.layers.flatten(
                {inputShape: truncatedMobileNet.outputs[0].shape.slice(1)}),
            // Layer 1.
            tf.layers.dense({
                units: 100,
                // FIXME 这是不是 neuron 数量 ？
                /* 用 model.summary() 得到的输出说，这是 Output shape，
                * 似乎和 参数 parameter 数量有相关关系？
                * https://pgaleone.eu/tensorflow/2018/07/28/understanding-tensorflow-tensors-shape-static-dynamic/
                *
                *  */
                activation: 'relu',
                kernelInitializer: 'varianceScaling',
                useBias: true
            }),
            // Layer 2. The number of units of the last layer should correspond
            // to the number of classes we want to predict.
            tf.layers.dense({
                units: NUM_CLASSES,
                kernelInitializer: 'varianceScaling',
                useBias: false,
                activation: 'softmax'
            })
        ]
    });
    // model.summary()

    // Creates the optimizers which drives training of the model.
    const optimizer = tf.train.adam(0.0001);
    // We use categoricalCrossentropy which is the loss function we use for
    // categorical classification which measures the error between our predicted
    // probability distribution over classes (probability that an input is of each
    // class), versus the label (100% probability in the true class)>
    model.compile({optimizer: optimizer, loss: 'categoricalCrossentropy'});

    // We parameterize batch size as a fraction of the entire dataset because the
    // number of examples that are collected depends on how many examples the user
    // collects. This allows us to have a flexible batch size.
    const batchSize =
        Math.floor(controllerDataset.xs.shape[0] * 100);
    if (!(batchSize > 0)) {
        throw new Error(
            `Batch size is 0 or NaN. Please choose a non-zero fraction.`);
    }

    // Train the model! Model.fit() will shuffle xs & ys so we don't have to.
    model.fit(controllerDataset.xs, controllerDataset.ys, {
        batchSize,
        epochs: 20,
        callbacks: {
            onBatchEnd: async (batch, logs) => {
                console.log('Loss: ' + logs.loss.toFixed(5))
            },
            onTrainEnd(logs) {
                const finalLoss = logs.loss.toFixed(5)
                if (finalLoss >= 0.1) {
                    // TODO 判断 loss，如果过高，提示用户、继续游玩 || 重新录入
                    alert('训练识别率不高~~ 建议重新绑定动作')
                }
            }
        }
    });
}

let isPredicting = false;
async function predict() {
    // ui.isPredicting();
    while (isPredicting) {
        // Capture the frame from the webcam.
        const img = await getImage();

        // Make a prediction through mobilenet, getting the internal activation of
        // the mobilenet model, i.e., "embeddings" of the input images.
        const embeddings = truncatedMobileNet.predict(img);

        // Make a prediction through our newly-trained model using the embeddings
        // from mobilenet as input.
        const predictions = model.predict(embeddings);

        // Returns the index with the maximum probability. This number corresponds
        // to the class the model thinks is the most probable given the input.
        const predictedClass = predictions.as1D().argMax();
        const classId = (await predictedClass.data())[0];
        img.dispose();

        // ui.predictClass(classId);
        // console.log('Predict classId = ', classId)
        applyPredictToController(classId)
        await tf.nextFrame();
    }
    // ui.donePredicting();
}

let keyLabelMap = {}
function genKeyLabelMap() {
    Object.keys(CONTROLLERS).find(key => {
        const all = CONTROLLERS[key].labels
        all.forEach(val => {
            keyLabelMap[val] = key
        })
    })
}
function getKeyFromLabel(label) {
    if (Object.keys(keyLabelMap) <= 0) {
        genKeyLabelMap()
        log(keyLabelMap)
    }
    return keyLabelMap[label]
}

let triggeredLabels = new Set()
function applyPredictToController(label) {
    const key = getKeyFromLabel(label)
    const curController = CONTROLLERS[key]
    if (!curController || !curController.labels) {
        return
    }
    const allLabels = CONTROLLERS[key].labels
    const halfLabelsLen = allLabels.length/2

    ui.setHighlightExample(key, label)
    // TODO controller.triggerKey(key, label)

    if (allLabels.indexOf(label) >= 0) {
        triggeredLabels.add(label)
    } else {
        triggeredLabels.clear()
    }
    // log('triggeredLabels.size = ', triggeredLabels.size)
    if (triggeredLabels.size === 1 && key === 'NoMove') {
        // 静止状态不应该触发按键操作
        controller.keyup('ArrowLeft')
        controller.keyup('ArrowRight')
        controller.keyup('ArrowUp')
        return
    }
    if (triggeredLabels.size === halfLabelsLen) {
        if (key === 'ArrowUp') {
            controller.keyup(key)
        }
        if (key === 'ArrowRight') {
            controller.keyup('ArrowLeft')
            controller.keyup('ArrowRight')
        }
        if (key === 'ArrowLeft') {
            controller.keyup('ArrowRight')
            controller.keyup('ArrowLeft')
        }
        controller.keydown(key)
        triggeredLabels.clear()
    }
}

async function trainAndPredict() {
    await train()
    console.log('Train DONE!!')
    console.log('predict Start!!')
    isPredicting = !isPredicting
    predict()
}

// let noMoveExampleIndex = 0
// function recordNoMoveExample() {
//     const noMove = CONTROLLERS.NoMove
//     const labels = noMove.labels
//     if (noMoveExampleIndex >= labels.length) {
//         return
//     }
//     setExampleHandler(labels[noMoveExampleIndex], noMove.key)
//     noMoveExampleIndex++
// }

function recordExamples(controllerKey) {
    const {key, labels} = controllerKey
    const totalLabels = labels.length
    let pointer
    let i = 0
    ui.showTip('<h3>Ready~</h3>', 1000)
    setTimeout(() => {
        ui.showTip('<h2>Move!</h2>', 1000)
        pointer = setInterval(() => {
            setExampleHandler(labels[i], key)
            console.log('setExampleHandler = ', labels[i])
            i++
            if (i >= totalLabels) {
                clearInterval(pointer)
            }
        }, TAKE_IMG_INTERVAL)
    }, 1000)
}

addClickListenerToEl('play', async () => {
    if (isPredicting) {
        isPredicting = false
    } else {
        ui.showTip('<h1>GoGoGo!</h1>', 1000)
        await trainAndPredict()
        window.startGame()
    }
})

addClickListenerToEl('controller-left', () => {
    // FIXME 只允许点击一次
    recordExamples(CONTROLLERS.ArrowLeft)
})
addClickListenerToEl('controller-up', () => {
    recordExamples(CONTROLLERS.ArrowUp)
})
addClickListenerToEl('controller-right', () => {
    recordExamples(CONTROLLERS.ArrowRight)
})
addClickListenerToEl('controller-NoMove', () => {
    // TODO 改为每个动作前，截一张图 recordNoMoveExample
    recordExamples(CONTROLLERS.NoMove)
})

