class GameObject {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.engine = undefined;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {}

    init() {}
    /**
     * @param {number} elapsedTime
     */
    update(elapsedTime) {}
    /**
     * @param {number} elapsedTime
     */
    fixedUpdate(elapsedTime) {}

}

export {GameObject};
