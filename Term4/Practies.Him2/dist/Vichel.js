"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vichel = void 0;
class Vichel {
    constructor(plateID, weight) {
        this.plateID = plateID;
        this.weight = weight;
        this.plateID = plateID;
        this.weight = weight;
    }
    getPlateID() {
        return this.plateID;
    }
    getWeight() {
        return this.weight;
    }
    getSpeed() {
        return this.weight / 1000;
    }
}
exports.Vichel = Vichel;
