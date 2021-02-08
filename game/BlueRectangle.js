import GameObject from "../engine/GameObject.js";
import MoveComponent from "./components/PlayerMoveComponent.js";
import DrawComponent from "./components/DrawComponent.js";

class BlueRectangle extends GameObject {
    constructor() {
        super();
        let moveComponent = new MoveComponent(this);
        let drawComponent = new DrawComponent(this, 'blue');
        this.components.push(moveComponent, drawComponent);
    }
}

export default BlueRectangle;
