"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(weight, plateID) {
        this.weight = weight;
        this.plateID = plateID;
    }
    getWeight() {
        return this.weight;
    }
    getPlateID() {
        return this.plateID;
    }
    getSpeed() {
        return 0; // Abstract method, to be implemented by child classes
    }
}
exports.Vehicle = Vehicle;
