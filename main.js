import FirstScene from './game/scenes/FirstScene.js';
import RedRectangle from './game/prefabs/RedRectangle.js';
import BlueRectangle from './game/prefabs/BlueRectangle.js';
import MoveComponent from './game/components/MoveComponent.js';
import PlayerMoveComponent from './game/components/PlayerMoveComponent.js';
import DrawComponent from './game/components/DrawComponent.js';
import Scene from './engine/Scene.js';

const canv = document.getElementById('canv');

const pageResize = () => {
	const canv = document.getElementById('canv');
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
};
pageResize();
window.addEventListener('resize', pageResize);

const ctx = canv.getContext('2d');

function clear() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canv.width, canv.height);
}

let allComponents = [MoveComponent, DrawComponent, PlayerMoveComponent];
let allPrefabs = [BlueRectangle, RedRectangle];

let firstScene = Scene.deserialize(FirstScene, allComponents, allPrefabs);

function gameLoop() {
	clear();
	firstScene.draw(ctx);
	firstScene.update();
}

setInterval(gameLoop, 1000 / 60); // 60 frames created per second
