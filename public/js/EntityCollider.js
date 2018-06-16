

export default class EntityCollider {
    constructor(entities) {
        this.entities = entities;
    }

    check(subject, levelEntities) {
        this.entities.forEach(candidate => {
            if (subject === candidate) {
                return;
            }

            if (subject.bounds.overlaps(candidate.bounds)) {
              subject.collides(candidate, levelEntities);
              candidate.collides(subject, levelEntities);
            }
        })
    }
}
