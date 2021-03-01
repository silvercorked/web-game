import Scene from "./scene.js"

class GameObject {

	static deserialize(definition, allComponents) {
		let gameObj = new GameObject();
		gameObj.name = definition.name;
		definition.components.forEach(componentDefinition => {
			let componentClass = allComponents.find(componentClass => componentClass.name == componentDefinition.name);
			let component = new componentClass(gameObj, ...componentDefinition.args || []);
			gameObj.components.push(component);
		});
		if (definition.children)
			definition.children.forEach(child => {
				let gameObjChild = Scene.deserializeObject(child);
				gameObj.children.push(gameObjChild);
			});
		return gameObj;
	}

	constructor() {
		this.x = 0;
		this.y = 0;
		this.components = [];
		this.children = [];
		this.markedDestroyed = false;
	}
	update() {
		this.components.forEach(component => {
			if (component.update)
				component.update();
				this.children.forEach(child => child.update ? child.update() : false);
		});
	}
	draw(ctx) {
		this.components.forEach(component => {
			if (component.draw)
				component.draw(ctx);
				this.children.forEach(child => child.draw ? child.draw(ctx) : false);
		});
	}
		/**
	 * Mark this game object for destroy
	 */
	destroy(){
		this.markedDestroy = true;
	}

	/**
	 * Get a game object by name
	 */
	getGameObject(name){
		for(let child of this.children){
			if(child.name == name) return child;
			let foundChild = child.getGameObject(name);
			if(foundChild) return foundChild;
		}
		
	}

	/**
	 * Find a component by name
	 */
	getComponent(name){
		for(let component of this.components){
			if(component.constructor.name == name)
				return component;
		}
		//If we didn't find it, search any children we have
		for(let child of this.children){
			let component = child.getComponent(name);
			if(component) return component;
		}
	}

	/**
	 * Call a method on this game object (if present) and all children
	 */
	callMethod(name, args){
		for(let component of this.components){
			if(component[name])
				component[name](args);
		}
		for(let child of this.children){
			child.callMethod(name, args);
		}
	}
}

export default GameObject;
