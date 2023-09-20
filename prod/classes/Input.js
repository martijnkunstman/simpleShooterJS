export default class Input {
    keyUpActive = false;
    keyDownActive = false;
    keyRightActive = false;
    keyLeftActive = false;
    keySpaceActive = false;
    keyPlusActive = false;
    keyMinusActive = false;
    constructor() {
        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
    }
    keyDown(e) {
        switch (e.code) {
            case "ArrowUp":
                this.keyUpActive = true;
                break;
            case "ArrowDown":
                this.keyDownActive = true;
                break;
            case "ArrowLeft":
                this.keyLeftActive = true;
                break;
            case "ArrowRight":
                this.keyRightActive = true;
                break;
            case "KeyW":
                this.keyUpActive = true;
                break;
            case "KeyS":
                this.keyDownActive = true;
                break;
            case "KeyA":
                this.keyLeftActive = true;
                break;
            case "KeyD":
                this.keyRightActive = true;
                break;
            case "Space":
                this.keySpaceActive = true;
                break;
        }
    }
    ;
    keyUp(e) {
        switch (e.code) {
            case "ArrowUp":
                this.keyUpActive = false;
                break;
            case "ArrowDown":
                this.keyDownActive = false;
                break;
            case "ArrowLeft":
                this.keyLeftActive = false;
                break;
            case "ArrowRight":
                this.keyRightActive = false;
                break;
            case "KeyW":
                this.keyUpActive = false;
                break;
            case "KeyS":
                this.keyDownActive = false;
                break;
            case "KeyA":
                this.keyLeftActive = false;
                break;
            case "KeyD":
                this.keyRightActive = false;
                break;
            case "Space":
                this.keySpaceActive = false;
                break;
        }
    }
    ;
}
