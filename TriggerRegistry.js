class TriggerRegistry {
    constructor() {
        this.registry = [];
    }

    /**
     * @param {{posX: number, posY: number, height: number, width: number}} property
     */
    set prop(property) {
        this.registry.push(property);
    }

    get props() {
        return this.registry;
    }
}

export{TriggerRegistry};
