import Component from "../../engine/Component.js";

class MoveComponent extends Component {
    static name = 'MoveComponent';
    constructor(gameObject) {
        super(gameObject);
    }
    update() {
        this.gameObject.x++;
        this.gameObject.y++;
    }
}

export default MoveComponent;
