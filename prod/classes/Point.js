export default class Point {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    distance(point) {
        return Math.sqrt(Math.pow(this.y - point.y, 2) + Math.pow(this.x - point.x, 2));
    }
    angle(point) {
        return Math.atan2(this.y - point.y, this.x - point.x) * 180 / Math.PI;
    }
}
