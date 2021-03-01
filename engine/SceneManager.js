import Scene from "./Scene.js";

class SceneManager {
    currentScene;
    allComponents;
    allPrefabs;
    allScenes = [];

    setCurrentScene(sceneName) {
        if (this.currentScene && sceneName == this.currentScene.name)
            return console.log('Scene is already the current scene!');
        let proposedDefinition = this.allScenes.find(scene => scene.name == sceneName);
        if (!proposedDefinition)
            return console.error('Scene not found with name ' + sceneName +'!');
        this.currentScene = Scene.deserialize(proposedDefinition, this.allComponents, this.allPrefabs);
    }
}

let sceneManager = new SceneManager();
export default sceneManager;
