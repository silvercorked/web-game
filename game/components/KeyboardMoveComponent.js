import Component from "../../engine/component.js"

class KeyboardMoveComponent extends Component {
	static name = "KeyboardMoveComponent";
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed;
	}
	update() {
		if (globalThis.Input.getKey("ArrowLeft") || globalThis.Input.getKey('a')) this.gameObject.x -= 1 * this.speed;
		if (globalThis.Input.getKey("ArrowRight") || globalThis.Input.getKey('d')) this.gameObject.x += 1 * this.speed;
		if (globalThis.Input.getKey("ArrowUp") || globalThis.Input.getKey('w')) this.gameObject.y -= 1 * this.speed;
		if (globalThis.Input.getKey("ArrowDown") || globalThis.Input.getKey('s')) this.gameObject.y += 1 * this.speed;
	}

}

export default KeyboardMoveComponent;