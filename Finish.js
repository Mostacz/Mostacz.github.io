import { GameObject } from "./GameObject.js";

class Finish extends GameObject {
    constructor(posX, posY, width, height) {
        super(posX, posY);
        this.height = height;
        this.width = width;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

export {Finish};
