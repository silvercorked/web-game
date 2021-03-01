import Component from "../Component.js";

class DrawComponent extends Component {
    static name = 'DrawComponent';
    constructor(gameObject, color) {
        super(gameObject);
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.gameObject.x, this.gameObject.y, 100, 200);
    }
}

export default DrawComponent;
