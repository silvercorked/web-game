import GameObject from './GameObject.js';

class Scene {

    static deserialize(definition, allComponents, allPrefabs) {
        let scene = new Scene();
        scene.name = definition.name;
        definition.children.forEach(child => {
            let gameObj;
            if (child.prefabName) {
                gameObj = GameObject.deserialize(
                    allPrefabs.find(prefab => child.prefabName == prefab.name),
                    allComponents
                );
            }
            else {
                gameObj = GameObject.deserialize(
                    child.gameObject,
                    allComponents
                );
            }
            gameObj.x = child.x || 0;
            gameObj.y = child.y || 0;
            scene.addChild(gameObj);
        });
        return scene;
    }

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
