import {loadMario} from './entities/Mario.js'
import {loadGoomba} from './entities/Goomba.js'
import {loadKoopa} from './entities/Koopa.js'

export function loadEntities() {
    const entitiesFactory = {};

    function addAs(name) {
        return factory => {entitiesFactory[name] = factory}
    }

    return Promise.all([
        loadMario().then(addAs('mario')),
        loadGoomba().then(addAs('goomba')),
        loadKoopa().then(addAs('koopa')),
    ])
        .then(() => entitiesFactory)
}

