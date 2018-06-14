
function lookForEntity(levelEntities, targetEntity) {
    let ret = false;

    for (let addedEntity of levelEntities) {
        if (addedEntity.hashId &&
            addedEntity.hashId === targetEntity.hashId) {
            ret = true;
        }
    }

    return ret;
}

function calculatePosFromCamera(entityPos, cameraPos) {
    const twentyBlock = 320;
    const disFromCamera = entityPos.x - cameraPos.x;

    return (disFromCamera < twentyBlock && disFromCamera > -twentyBlock);
}

function addEntities(level, targetEntity, entityFactory) {
    const createEntity = entityFactory[targetEntity.name];
    const entity = createEntity();
    entity.pos.set(targetEntity.pos.x, targetEntity.pos.y);
    entity.hashId = targetEntity.hashId;
    level.entities.add(entity);

    for (let i = 0;i<level.toBeAddedEntities.length;i++) {
        if (level.toBeAddedEntities[i].hashId === targetEntity.hashId) {
            level.toBeAddedEntities.splice(i, 1);
            break;
        }
    }

}

function checkEntities(level, entityFactory, camera) {
    /*The logic can be:
     * 0. Record: When game initiating, record the entity pos and a Unique id for identifying.
     * 1. Checking: During playing, check the pos recorded continuously(Trigger frequency should be optimized).
     * 2. Add: If the pos of an entity is near the camera, And it was not added yet (judge by id), then add it to game.
     * 3. Deleting: When an entity was killed, delete it from level.entities.
     * 4. Respawn: When the camera get close to the entity Once Again(How to detect???), add it again.
     *
     * Data Struc: Two Set.
     *
     */
    level.entitiesRecord.forEach((entity) => {
        const entityNearCamera = calculatePosFromCamera(entity.pos, camera.pos);

        if (entityNearCamera) {
            const entityNotAddedYet = lookForEntity(level.toBeAddedEntities, entity);

            if (entityNotAddedYet) {
                addEntities(level, entity, entityFactory);
            }
        }

    })
}

function deleteUselessEntities(level, camera) {
    level.entities.forEach(entity => {
        const entityNearCamera = calculatePosFromCamera(entity.pos, camera.pos);

        if (!entityNearCamera && entity.killable !== undefined) {
            level.entities.delete(entity);

            // TODO: Optimize check point logic, can not got checked sometimes.
            level.checkEntitiesPoints.push(entity.pos.x - 301);
            level.checkEntitiesPoints.push(entity.pos.x - 300);
            level.checkEntitiesPoints.push(entity.pos.x - 299);

            level.toBeAddedEntities.push({
                hashId: entity.hashId
            });
            console.log('deleteUselessEntities; levelEntities.size = ', level.entities.size);
        }
    })
}

export function controlEntities(camera, level, entityFactory) {
    let intCameraPosX = Math.floor(camera.pos.x);

    const checkEntitiesPointIndex = level.checkEntitiesPoints.indexOf(intCameraPosX);
    const nearCheckEntitiesPoint = checkEntitiesPointIndex !== -1;
    if (nearCheckEntitiesPoint) {
        level.checkEntitiesPoints.splice(checkEntitiesPointIndex, 1);
        // 最理想的状态是，只有当“需要”添加实体时，才检测一次，
        // 一个关卡有几个实体，就只有几次 checkEntities
        console.log('checkEntities');
        checkEntities(level, entityFactory, camera);
        deleteUselessEntities(level, camera);
    }
}
