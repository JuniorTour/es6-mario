import {Trait} from '../Entity.js'

export default class Stomer extends Trait {
    constructor() {
        super('stomer');
        this.bounceSpeed = 400;

        this.onStomp = function () {
        }
    }

    bounce(us, them) {
        us.bounds.bottom = them.bounds.top;
        us.vel.y = -this.bounceSpeed;
    }

    collides(us, them) {
        /*此处是否反弹跳跃（bounce）的判断严重依赖事件（kill，collide等）的触发顺序。
        * 我们可以选择通过一些细微的改动---来调整顺序，但是！过于依赖这种细微的改动不利以后续项目的扩展。
        * 所以我们需要更健壮的解决方案。*/
        if (!them.killable || them.killable.dead) {
            return;
        }

        if ( us.vel.y > them.vel.y) {
            this.bounce(us, them);
            // this.didStomp = true
            this.sounds.add('stomp')
            this.onStomp(us, them);
        }
    }

    // remove the didStomp in update is the profit we gain from this.sounds
    // update(entity, { audioContext }) {
    //     if (this.didStomp) {
    //         // entity.audio.playAudio('stomp', audioContext)
    //         this.didStomp = false
    //     }
    // }
}
