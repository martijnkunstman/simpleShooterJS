export default class Laser {
    x;
    y;
    rotation;
    power;
    constructor(x, y, rotation, power) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.power = power * 2 + 100;
    }
    draw(ctx) {
        //ctx.save();
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.power * Math.cos(this.rotation * Math.PI / 180) + this.x, this.power * Math.sin(this.rotation * Math.PI / 180) + this.y);
        ctx.stroke();
        ctx.closePath();
        //ctx.restore();
    }
}
