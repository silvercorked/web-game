import Component from "../../engine/Component.js";

class CollisionComponent extends Component {
    constructor(gameObject) {
        super(gameObject);
    }
    isColliding(ctx) {
        return 0; // return true if boundaries are overlapping, perhaps
    }
}

export default CollisionComponent;
