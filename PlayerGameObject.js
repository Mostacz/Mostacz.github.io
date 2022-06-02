import {WallGameObject} from "./WallGameObject.js"

class PlayerGameObject extends WallGameObject {
    constructor(posX, posY, width, height, color) {
        super(posX, posY, width, height, color);
    }

    vector2d = {
        x: 0,
        x_direction: 1,
        y: 0,
        y_direction: 1,

    }
    update(elapsedTime) {
        if(this.engine.inputCollector.key.has("ArrowRight")) {
            this.vector2d.x = 4;
            this.vector2d.x_direction = 1;
        }
        if(this.engine.inputCollector.key.has("ArrowLeft")) {
            this.vector2d.x = 4;
            this.vector2d.x_direction = -1;
        }
        if(this.engine.inputCollector.key.has("ArrowUp")) {
            this.vector2d.y = 4;
            this.vector2d.y_direction = -1;
        }
        if(this.engine.inputCollector.key.has("ArrowDown")) {
            this.vector2d.y = 4;
            this.vector2d.y_direction = 1;
        }

        if (this.vector2d.x > 0) 
            this.vector2d.x -= 0.8 / elapsedTime;
        else this.vector2d.x = 0;
        if (this.vector2d.y > 0)
            this.vector2d.y -= 0.8 / elapsedTime;
        else this.vector2d.y = 0;
        
        this.posX += this.vector2d.x * this.vector2d.x_direction;
        this.posY += this.vector2d.y * this.vector2d.y_direction;
    }
}

export {PlayerGameObject};
