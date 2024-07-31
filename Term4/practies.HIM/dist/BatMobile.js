"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatMobile = void 0;
const Vehicle_1 = require("./Vehicle");
class BatMobile extends Vehicle_1.Vehicle {
    constructor(weight, plateID, isBatmanHere) {
        super(weight, plateID);
        this.isBatmanHere = isBatmanHere;
    }
    getIsBatmanHere() {
        return this.isBatmanHere;
    }
    getSpeed() {
        return this.isBatmanHere ? 500 : 110;
    }
}
exports.BatMobile = BatMobile;
