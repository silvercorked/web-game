import SceneManager from "./scene-manager.js";
import Scene from "./scene.js";
import Vector2 from "./vector-2.js"

class Input {
	keys = [];
	keysDown = [];
	keysUp = [];
	frameKeysDown = [];
	frameKeysUp = [];

	mouseButtons = [];
	mouseButtonsDown = [];
	mouseButtonsUp = [];
	frameMouseButtonsDown = [];
	frameMouseButtonUp = [];

	mousePosition = new Vector2();
	frameMousePosition;
	lastFrameMousePosition;

	scrollWheel = 0;
	frameScrollWheel = 0;

	SwapArrays() {
		this.frameKeysDown = this.keysDown;
		this.frameKeysUp = this.keysUp;
		this.keysDown = [];
		this.keysUp = [];

		this.frameMouseButtonsDown = this.mouseButtonsDown;
		this.frameMouseButtonsUp = this.mouseButtonsUp;
		this.mouseButtonsDown = [];
		this.mouseButtonsUp = [];

		this.lastFrameMousePosition = this.frameMousePosition
		this.frameMousePosition = new Vector2(this.mousePosition);

		this.frameScrollWheel = this.scrollWheel;
		this.scrollWheel = 0;

		SceneManager.currentScene.callMethod("onKeyDown", this.frameKeysDown);
		SceneManager.currentScene.callMethod("onKeyUp", this.frameKeysUp);

		SceneManager.currentScene.callMethod("onMouseButtonDown", this.frameMouseButtonsDown);
		SceneManager.currentScene.callMethod("onMouseButtonUp", this.frameMouseButtonsUp);
		if (this.frameMousePosition && this.lastFrameMousePosition && !this.lastFrameMousePosition.equals(this.frameMousePosition))
		SceneManager.currentScene.callMethod("onMouseMove", this.frameMousePosition);
		SceneManager.currentScene.callMethod("onScrollWheel", this.frameScrollWheel);   
	}

	getKey(key) {
		return this.keys[key];
	}
	getKeyDown(key) {
		return this.frameKeysDown[key];
	}
	getKeyUp(key) {
		return this.frameKeysUp[key];
	}

	getMouseButton(button) {
		return this.mouseButtons[button];
	}
	getMouseButtonDown(button) {
		return this.frameMouseButtonsDown[button];
	}
	getMouseButtonUp(button) {
		return this.frameMouseButtonsUp[button];
	}

	getScrollWheel() {
		return this.frameScrollWheel;
	}

	getMousePosition() {
		return this.frameMousePosition;
	}
	getMousePositionDelta() {
		return Vector2.subtract(this.frameMousePosition, this.lastFrameMousePosition);
	}


	attach(document) {
		//Setup all the key listeners
		document.body.addEventListener('keydown', keydown);
		document.body.addEventListener('keyup', keyup);
		document.body.addEventListener('keypress', keypress);
		document.body.addEventListener('mousedown', mousedown);
		document.body.addEventListener('mouseup', mouseup);
		document.body.addEventListener('mousemove', mousemove);
		document.body.addEventListener('wheel', wheelevent);
		document.body.addEventListener('contextmenu', contextmenu);

		function keydown(event) {
			console.log("Down: " + event.key);
			if (Input.keys[event.key] != true)
				Input.keysDown[event.key] = true;
			Input.keys[event.key] = true;
		}

		function keyup(event) {
			console.log("Up: " + event.key)
			if (Input.keys[event.key] != false)
				Input.keysUp[event.key] = true;
			Input.keys[event.key] = false;
		}

		function mousedown(event) {
			console.log("Mouse Down: " + event.button)
			if (Input.mouseButtons[event.button] != true)
				Input.mouseButtonsDown[event.button] = true;
			Input.mouseButtons[event.button] = true;
		}

		function mouseup(event) {
			console.log("Mouse Up: " + event.button)
			if (Input.mouseButtons[event.button] != false)
				Input.mouseButtonsUp[event.button] = true;
			Input.mouseButtons[event.button] = false;
		}

		function mousemove(event) {
			//console.log("Mouse Move: " + event.clientX + ", " + event.clientY)
			Input.mousePosition.x = event.clientX;
			Input.mousePosition.y = event.clientY;
		}

		function wheelevent(event) {
			console.log("Scroll Delta: " + event.deltaY)
			if (event.deltaY != 0)
				Input.mouseScrollDelta = event.deltaY;
		}

		function keypress(event) {
			//console.log(`Keys: ${event.key}, Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
		}

		// Based on https://stackoverflow.com/questions/381795/how-to-disable-right-click-context-menu-in-javascript
		// Kills the right mouse context menu
		function contextmenu(event) {
			if (event.preventDefault != undefined)
				event.preventDefault();
			if (event.stopPropagation != undefined)
				event.stopPropagation();
			return false;
		}
	}
}

let input = new Input();
export default input;