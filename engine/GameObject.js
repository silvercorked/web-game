class GameObject {

    static deserialize(definition, allComponents) {
        let gameObj = new GameObject();
        gameObj.name = definition.name;
        definition.components.forEach(componentDefinition => {
            let componentClass = allComponents.find(componentClass => componentClass.name == componentDefinition.name);
            let component = new componentClass(gameObj, ...componentDefinition.args || []);
            gameObj.components.push(component);
        });
        return gameObj;
    }

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
