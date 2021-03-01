const fs = require('fs');
let toBuild = [
	{ dir: "./engine/components/", name: "engine-components.js" },
	{ dir: "./game/components/", name: "game-components.js" },
	{ dir: "./game/prefabs/", name: "game-prefabs.js" },
	{ dir: "./game/scenes/", name: "game-scenes.js" },
];
for (let i = 0; i < toBuild.length; i++) {
	let buildString = "";
	let dir = toBuild[i].dir;
	let buildName = toBuild[i].name;
	let files = fs.readdirSync(dir)
	files.forEach(file => {
		if (file == buildName) return;
		let filename = file.substr(0, file.length - 3);
		buildString += `export {default as ${filename}} from "${"./" + file}"\n`;
	})
	fs.writeFileSync(dir + buildName, buildString);
}