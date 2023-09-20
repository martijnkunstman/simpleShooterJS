import Point from "../Point.js";
import Controls from "../Controls.js";
import GameElement from "../GameElement.js";
import Laser from "../Laser.js";
export default class Player extends GameElement {
    //speed
    //manouvre
    //shield
    //wingmancount
    //wingmantype
    speedFactor = 1;
    controls;
    constructor(spriteSrc, point = new Point(), rotation = 0, speed = 0, speedFactor = 1) {
        super(spriteSrc, point, rotation, speed);
        this.speedFactor = speedFactor;
        this.controls = new Controls();
    }
    update(input, ctx) {
        this.controls.update(input);
        this.controls.draw(input);
        this.rotation = this.controls.rotation;
        this.point.x += (this.controls.vector.x * this.speedFactor);
        this.point.y += (this.controls.vector.y * this.speedFactor);
        if (input.keySpaceActive) {
            let laser = new Laser(this.point.x, this.point.y, this.rotation, this.controls.laserPower);
            laser.draw(ctx);
        }
    }
}
