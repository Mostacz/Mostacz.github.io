class InputCollector {    
    constructor() {
        this.pressedKeys = new Set();
        document.addEventListener("keydown", e => {
            this.pressedKeys.add(e.code);
        });
        document.addEventListener("keyup", e => {
            this.pressedKeys.delete(e.code);
        });
    }

    get key() {
        return this.pressedKeys;
    }
}

export {InputCollector};
