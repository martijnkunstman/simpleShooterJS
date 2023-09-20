export default class Vector {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    correction(maxLength, minLength) {
        var tempLength = this.length();
        if (tempLength > maxLength) {
            this.x = this.x / tempLength;
            this.y = this.y / tempLength;
            if (Math.abs(Math.abs(this.x) - maxLength) < minLength / 10) {
                this.y = 0;
            }
            else if (Math.abs(Math.abs(this.y) - maxLength) < minLength / 10) {
                this.x = 0;
            }
        }
        else if (tempLength < minLength) {
            this.x = 0;
            this.y = 0;
        }
    }
    damping(d) {
        this.x = this.x - this.x * d;
        this.y = this.y - this.y * d;
    }
    friction(d) {
        var tempLength = this.length();
        if (tempLength > d) {
            this.x = this.x - this.x / tempLength * d;
            this.y = this.y - this.y / tempLength * d;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
    }
}
