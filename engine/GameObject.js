class GameObject {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.components = [];
    }
    update() {
        this.components.forEach(component => {
            if (component.update)
                component.update();
        });
    }
    draw(ctx) {
        this.components.forEach(component => {
            if (component.draw)
                component.draw(ctx);
        });
    }
}

export default GameObject;
