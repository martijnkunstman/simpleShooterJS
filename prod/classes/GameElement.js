import Point from "./Point.js";
export default class GameElement {
    sprite = new Image();
    spriteLoaded = false;
    point = new Point();
    rotation;
    speed;
    width = 0;
    height = 0;
    constructor(spriteSrc, point = new Point(), rotation = 0, speed = 0) {
        this.sprite.addEventListener("load", this.load.bind(this));
        this.sprite.src = "./img/" + spriteSrc;
        this.point.x = point.x;
        this.point.y = point.y;
        this.rotation = rotation;
        this.speed = speed;
    }
    load(e) {
        this.width = e.currentTarget.width;
        this.height = e.currentTarget.height;
        this.spriteLoaded = true;
        e.currentTarget.removeEventListener("load", this.load);
    }
    draw(ctx) {
        if (this.spriteLoaded) {
            ctx.save();
            //ctx.globalCompositeOperation = 'xor'; 
            ctx.translate(this.point.x, this.point.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.drawImage(this.sprite, -this.width / 2, -this.height / 2);
            ctx.restore();
        }
    }
}
