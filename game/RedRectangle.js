import GameObject from "../engine/GameObject.js";
import MoveComponent from "./components/MoveComponent.js";
import DrawComponent from "./components/DrawComponent.js";

class RedRectangle extends GameObject {
    constructor() {
        super();
        let moveComponent = new MoveComponent(this);
        let drawComponent = new DrawComponent(this, 'red');
        this.components.push(moveComponent, drawComponent);
    }
}

export default RedRectangle;
