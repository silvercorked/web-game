import RedRectangle from './game/RedRectangle.js';
import FirstScene from './game/FirstScene.js';

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

let firstScene = new FirstScene();
let redRectangle = new RedRectangle();
firstScene.addChild(redRectangle);

let red2 = new RedRectangle();
red2.x = 300;
red2.y = -10;
firstScene.addChild(red2);

function gameLoop() {
	clear();
	firstScene.draw(ctx);
	firstScene.update();
}

setInterval(gameLoop, 33);
