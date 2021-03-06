import {GameObject} from "./GameObject.js";
import {InputCollector} from "./InputCollector.js";
import {TriggerRegistry} from "./TriggerRegistry.js";

class Engine {
    /**
    * @param {HTMLCanvasElement} canvas
    */
    constructor(canvas) {
        this.canvas = canvas;
        this.inputCollector = new InputCollector();
        this.triggerRegistry = new TriggerRegistry();
        this.ctx = canvas.getContext("2d");
        this.ctxHeight = canvas.height;
        this.ctxWidth = canvas.width;
    }

    /**
     * @param {GameObject[]} gameObjects
     */
    start(gameObjects) {
        gameObjects.forEach(obj => { 
            obj.engine = this;
            obj.init();
        });
        let lastTime = 0;
        const gameLoop = () => {
            const currentTime = performance.now();
            const elapsedTime = currentTime - lastTime;
            lastTime = currentTime;
            gameObjects.forEach(obj => { obj.update(elapsedTime); });
            this.ctx.clearRect(0, 0, this.ctxWidth, this.ctxHeight);
            gameObjects.forEach(obj => { obj.draw(this.ctx); });
            requestAnimationFrame(gameLoop);
        };
        let lastFixedTime = 0;
        const fixedGameLoop = () => {
            const currentTime = performance.now();
            const elapsedTime = currentTime - lastFixedTime;
            lastFixedTime = currentTime;
            gameObjects.forEach(obj => { obj.fixedUpdate(elapsedTime); });
            setTimeout(fixedGameLoop, 16.6666666667);
        };
        gameLoop();
        fixedGameLoop();
    }
}

export {Engine};
