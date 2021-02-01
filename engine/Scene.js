class Scene {
    constructor() {
        this.children = [];
    }
    getChildren() {
        return this.children;
    }
    addChild(child) {
        this.children.push(child);
    }
    draw(ctx) {
        this.children.forEach(child => {
            child.draw(ctx);
        });
    }
    update() {
        this.children.forEach(child => {
            child.update();
        });
    }
}

export default Scene;
