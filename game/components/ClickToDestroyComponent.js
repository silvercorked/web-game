import Component from "../../engine/component.js";

class ClickToDestroyComponent extends Component {
	static name = "ClickToDestroyComponent";
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed;
	}
	start(){
		console.log("You called start() on a ClickToDestroyComponent")
	}
	update() {
		if(globalThis.Input.getMouseButtonDown(0)){
			let mousePosition = globalThis.Input.getMousePosition();
			if(mousePosition.x < 100 && mousePosition.y < 200){
			this.gameObject.destroy();
			let mainController = globalThis.SceneManager.currentScene.getGameObject("MainController");
			let scoreComponent = mainController.getComponent("ScoreComponent");
			scoreComponent.score++;
			}
		}
	}
}

export default ClickToDestroyComponent;