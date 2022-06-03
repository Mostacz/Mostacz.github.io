import {GameObject} from "./GameObject.js"

class PlayerGameObject extends GameObject {
    constructor(posX, posY, width, height) {
        super(posX, posY);
        this.startPos = {posX, posY};
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
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

    update(elapsedTime) {
        for (let i = 0; i < this.engine.triggerRegistry.props.length; i++) {
            const path = new Path2D();
            path.rect(this.engine.triggerRegistry.props[i].posX, this.engine.triggerRegistry.props[i].posY,
                    this.engine.triggerRegistry.props[i].width, this.engine.triggerRegistry.props[i].height);
            if (this.engine.ctx.isPointInPath(path, this.posX, this.posY) || 
                this.engine.ctx.isPointInPath(path, this.posX + this.width, this.posY) ||
                this.engine.ctx.isPointInPath(path, this.posX, this.posY + this.height) ||
                this.engine.ctx.isPointInPath(path, this.posX + this.width, this.posY + this.height)) {
                    this.vector2d = {
                        x: 0,
                        x_direction: 1,
                        y: 0,
                        y_direction: 1,
                    }
                    this.posX = this.startPos.posX;
                    this.posY = this.startPos.posY;
                }
        }
    }
}

export {PlayerGameObject};
