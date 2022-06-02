import {WallGameObject} from "./WallGameObject.js"

class PlayerGameObject extends WallGameObject {
    constructor(posX, posY, width, height, color) {
        super(posX, posY, width, height, color);
    }

    velocity = 4;
    acceleration = 1.6;

    vector2d = {
        x: 0,
        x_direction: 1,
        y: 0,
        y_direction: 1,
    }
    fixedUpdate(elapsedTime) {
        if(this.engine.inputCollector.key.has("ArrowRight")) {
            if (this.vector2d.x < this.velocity) {
                if (this.vector2d.x_direction === -1)
                    this.vector2d.x -= this.acceleration / elapsedTime;
                else this.vector2d.x += this.acceleration / elapsedTime;
            }
            if (this.vector2d.x <= 0 && this.vector2d.x_direction === -1)
                this.vector2d.x_direction = 1;
        }
        if(this.engine.inputCollector.key.has("ArrowLeft")) {
            if (this.vector2d.x < this.velocity) {
                if (this.vector2d.x_direction === 1)
                    this.vector2d.x -= this.acceleration / elapsedTime;
                else this.vector2d.x += this.acceleration / elapsedTime;
            }
            if (this.vector2d.x <= 0 && this.vector2d.x_direction === 1)
                this.vector2d.x_direction = -1;
        }
        if(this.engine.inputCollector.key.has("ArrowUp")) {
            if (this.vector2d.y < this.velocity) {
                if (this.vector2d.y_direction === 1)
                    this.vector2d.y -= this.acceleration / elapsedTime;
                else this.vector2d.y += this.acceleration / elapsedTime;
            }
            if (this.vector2d.y <= 0 && this.vector2d.y_direction === 1)
                this.vector2d.y_direction = -1;
        }
        if(this.engine.inputCollector.key.has("ArrowDown")) {
            if (this.vector2d.y < this.velocity) {
                if (this.vector2d.y_direction === -1)
                    this.vector2d.y -= this.acceleration / elapsedTime;
                else this.vector2d.y += this.acceleration / elapsedTime;
            }
            if (this.vector2d.y <= 0 && this.vector2d.y_direction === -1)
                this.vector2d.y_direction = 1;
        }

        if (this.vector2d.x > 0)
            this.vector2d.x -= (this.acceleration / 2) / elapsedTime;
        else this.vector2d.x = 0;
        
        if (this.vector2d.y > 0)
            this.vector2d.y -= (this.acceleration / 2) / elapsedTime;
        else this.vector2d.y = 0;
        
        this.posX += this.vector2d.x * this.vector2d.x_direction;
        this.posY += this.vector2d.y * this.vector2d.y_direction;
    }
}

export {PlayerGameObject};
