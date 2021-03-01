import GameObject from './GameObject.js';

class Scene {

    static deserialize(definition) {
        let scene = new Scene();
        scene.name = definition.name;
        definition.children.forEach(child => {
            let gameObj = this.deserializeObject(child, globalThis.SceneManager.allComponents, globalThis.SceneManager.allPrefabs);
            scene.addChild(gameObj);
        });
        return scene;
    }

    static deserializeObject(objectDefinition) {
        let gameObj, gameObjDef;
        if (objectDefinition.prefabName)
            gameObjDef = globalThis.SceneManager.allPrefabs.find(prefab => objectDefinition.prefabName == prefab.name);
        else
			gameObj = objectDefinition.gameObject;
		gameObj = GameObject.deserialize(gameObjDef);
        gameObj.x = objectDefinition.x || 0;
        gameObj.y = objectDefinition.y || 0;
        return gameObj;
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
    cullDestroyed() {
        let newChildren = [];
        for (child of this.children) {
            if (!child.markedDestroyed())
                newChildren.push(child);
        }
        this.children = newChildren;
	}
	getGameObject(name){
		for(let child of this.children){
			if(child.name == name) return child;
			let foundChild = child.getGameObject(name);
			if(foundChild) return foundChild;
		}
		//console.error("Couldn't find game component " + name)
	}
	instantiate(objectDescription){
		let newObject = Scene.deserializeObject(objectDescription);
		this.addChild(newObject)
	}
	callMethod(name, args){
		for(let child of this.children){
			child.callMethod(name, args);
		}
	}
}

export default Scene;
