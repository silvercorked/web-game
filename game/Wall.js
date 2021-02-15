import GameObject from "../engine/GameObject.js";
import CollisionComponent from "./components/CollisionComponent.js";
import DrawComponent from "./components/DrawComponent.js";

class Wall extends GameObject {
    constructor() {
        super();
        let collisionComponent = new CollisionComponent(this);
        let drawComponent = new DrawComponent(this, 'grey');
        this.components.push(collisionComponent, drawComponent);
    }
}

export default Wall;
