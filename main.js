/* get references to all scenes */
import FirstScene from './game/scenes/FirstScene.js';
import SecondScene from './game/scenes/SecondScene.js';

/* get references to all prefabs */
import RedRectangle from './game/prefabs/RedRectangle.js';
import BlueRectangle from './game/prefabs/BlueRectangle.js';

/* get references to all components */
import MoveComponent from './game/components/MoveComponent.js';
import PlayerMoveComponent from './game/components/PlayerMoveComponent.js';
import DrawComponent from './engine/components/DrawComponent.js';
import ChangeSceneComponent from './game/components/ChangeSceneComponent.js'

/* get reference to major dependacies */
import SceneManager from './engine/SceneManager.js';
import Input from './engine/Input.js';

const canv = document.getElementById('canv');

// set up dependancy injection via global
globalThis.SceneManager = SceneManager;
globalThis.Input = Input;

const pageResize = () => {
	const canv = document.getElementById('canv');
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
};
pageResize();
window.addEventListener('resize', pageResize);

const ctx = canv.getContext('2d');

let allComponents = [MoveComponent, DrawComponent, PlayerMoveComponent, ChangeSceneComponent];
let allPrefabs = [BlueRectangle, RedRectangle];

globalThis.SceneManager.allComponents = allComponents;
globalThis.SceneManager.allPrefabs = allPrefabs;
globalThis.SceneManager.allScenes.push(FirstScene);
globalThis.SceneManager.allScenes.push(SecondScene);
globalThis.SceneManager.setCurrentScene('FirstScene');

function gameLoop() {
	clear();
	globalThis.SceneManager.currentScene.draw(ctx);
	globalThis.SceneManager.currentScene.update();
	console.log(globalThis.Input.getMousePosition())
}

function clear() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canv.width, canv.height);
}

setInterval(gameLoop, 1000 / 3); // 60 frames created per second
