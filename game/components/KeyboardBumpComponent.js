import Component from "../../engine/component.js"

class KeyboardBumpComponent extends Component {
	static name = "KeyboardBumpComponent";
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed;
	}

	onKeyDown(keys){
		if(keys["a"] || keys["ArrowLeft"]) this.gameObject.x -= 1 * this.speed
		if(keys["d"] || keys["ArrowRight"]) this.gameObject.x += 1 * this.speed
		if(keys["w"] || keys["ArrowUp"]) this.gameObject.y -= 1 * this.speed
		if(keys["s"] || keys["ArrowDown"]) this.gameObject.y += 1 * this.speed
	}

}

export default KeyboardBumpComponent;