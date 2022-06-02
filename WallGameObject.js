import { GameObject } from "./GameObject.js";

class WallGameObject extends GameObject {
    constructor(posX, posY, width, height, color) {
        super(posX, posY);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    /**
     * @param {number} elapsedTime
     */
    update(elapsedTime) {
        
    }

    /**
    * @param {CanvasRenderingContext2D} ctx    
    */
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

}

export {WallGameObject};
