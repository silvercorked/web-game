
//const Game from './game/game';
//const { GameEngine } = require('./gameEngine/engine');

const canv = document.getElementById('canv');

window.addEventListener('resize', () => {
	const canv = document.getElementById('canv');
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
})
