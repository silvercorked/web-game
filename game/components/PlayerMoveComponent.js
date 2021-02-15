import MoveComponent from "./MoveComponent.js";

class PlayerMoveComponent extends MoveComponent {
    constructor(gameObject) {
        super(gameObject);
        this.moveSpeed = 5;
        this.nextX = this.gameObject.x;
        this.nextY = this.gameObject.y;
        this.up = this.down = this.right = this.left = false;
        addEventListener('keydown', (code) => {
            console.log(code);
            switch(code.code) {
                case 'ArrowLeft': {
                    this.left = true;
                    break;
                }
                case 'ArrowUp': {
                    this.up = true;
                    break;
                }
                case 'ArrowRight': {
                    this.right = true;
                    break;
                } 
                case 'ArrowDown': {
                    this.down = true;
                    break;
                }
            }
        });
        addEventListener('keyup', (code) => {
            console.log(code);
            switch(code.code) {
                case 'ArrowLeft': {
                    this.left = false;
                    break;
                }
                case 'ArrowUp': {
                    this.up = false;
                    break;
                }
                case 'ArrowRight': {
                    this.right = false;
                    break;
                } 
                case 'ArrowDown': {
                    this.down = false;
                    break;
                }
            }
        });
    }
    update() {
        console.log(this.nextY, this.nextX);
        if (this.up && this.right) {
            this.nextX += this.moveSpeed;
            this.nextY -= this.moveSpeed;
        }
        else if (this.up && this.left) {
            this.nextX -= this.moveSpeed;
            this.nextY -= this.moveSpeed;
        }
        else if (this.right && this.down) {
            this.nextX += this.moveSpeed;
            this.nextY += this.moveSpeed;
        }
        else if (this.left && this.down) {
            this.nextX -= this.moveSpeed;
            this.nextY += this.moveSpeed;
        }
        else if (this.up) {
            this.nextY -= this.moveSpeed;
        }
        else if (this.down) {
            this.nextY += this.moveSpeed;
        }
        else if (this.left) {
            this.nextX -= this.moveSpeed;
        }
        else if (this.right) {
            this.nextX += this.moveSpeed;
        }
        this.gameObject.x = this.nextX;
        this.gameObject.y = this.nextY;
    }
}

export default PlayerMoveComponent;
