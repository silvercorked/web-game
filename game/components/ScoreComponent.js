import Component from "../../engine/component.js"

class ScoreComponent extends Component{
	static name = "ScoreComponent"
	constructor(gameObject){
		super(gameObject);
		this.score = 0;
	}
}

export default ScoreComponent;