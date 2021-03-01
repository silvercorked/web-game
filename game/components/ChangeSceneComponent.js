import Component from "../../engine/component.js";

class ChangeSceneComponent extends Component {
	static name = "ChangeSceneComponent";
	constructor(gameObject) {
		super(gameObject);
		this.ticks = 0;
	}
	update() {
		this.ticks++;
		if (this.ticks > 100) {
		if (globalThis.SceneManager.currentScene.name == "FirstScene")
			globalThis.SceneManager.changeScene("SecondScene");
		else globalThis.SceneManager.changeScene("FirstScene")
		}
	}
}

export default ChangeSceneComponent;
