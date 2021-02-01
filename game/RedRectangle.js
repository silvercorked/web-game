import GameObject from "../engine/GameObject";

class RedRectangle extends GameObject {
    constructor() {
        super();
    }
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 100, 200);
    }
    update() {
        this.x++;
        this.y++;
    }
}

export default RedRectangle;
