import Player from "./GameElement/Player.js";
import Input from "./Input.js";
import Point from "./Point.js";
import Enemy from "./GameElement/Enemy.js";
import Map from "../levels/level1/map/Map.js";
export default class Game {
    player;
    terrain;
    sky;
    input = new Input();
    width;
    height;
    gameElements = new Array();
    constructor(width, height, enemyCount) {
        this.player = new Player("player.png", new Point(width / 2, height / 2), 0, 0, 5);
        this.terrain = new Map(0.2, width, height, 2, "#999999");
        this.sky = new Map(0.25, width, height, 4, "#cccccc");
        this.width = width;
        this.height = height;
        for (let a = 0; a < enemyCount; a++) {
            this.gameElements.push(new Enemy("enemy.png", new Point(Math.random() * width, Math.random() * height), 0, 1));
            this.gameElements[a].fireRate = 4;
        }
        var canvas = document.createElement('canvas');
        canvas.id = "game";
        canvas.width = width;
        canvas.height = height;
        canvas.style.zIndex = "1";
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";
        document.getElementsByTagName("body")[0].appendChild(canvas);
        //
        var canvas2 = document.createElement('canvas');
        canvas2.id = "game2";
        canvas2.width = 100;
        canvas2.height = 100;
        canvas2.style.zIndex = "1";
        canvas2.style.position = "absolute";
        canvas2.style.border = "1px solid";
        canvas2.style.left = (this.width + 10) + "px";
        document.getElementsByTagName("body")[0].appendChild(canvas2);
        window.requestAnimationFrame(this.gameloop.bind(this));
    }
    gameloop() {
        //pre update
        let canvas = document.getElementById("game");
        let ctx = canvas.getContext("2d");
        let trailEffect = false;
        if (!trailEffect) {
            ctx.clearRect(0, 0, this.width, this.height);
        }
        else {
            ctx.fillStyle = 'rgba(255, 255, 255, .25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        this.terrain.draw(ctx);
        this.sky.draw(ctx);
        this.player.update(this.input, ctx);
        this.terrain.update(this.player);
        this.sky.update(this.player);
        for (let i in this.gameElements) {
            this.gameElements[i].update(i, this.width, this.height, this.gameElements, this.player);
        }
        this.gameElements = this.gameElements.filter(Boolean);
        this.player.draw(ctx);
        for (let i in this.gameElements) {
            this.gameElements[i].draw(ctx);
        }
        //to do: render engine        
        window.requestAnimationFrame(this.gameloop.bind(this));
    }
}
