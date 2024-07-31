"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vichel_1 = require("./Vichel");
class BatMobile extends Vichel_1.Vichel {
    constructor(weight, plateID, isBatmanHere) {
        super(weight, plateID);
        this.isBatmanHere = isBatmanHere;
        this.isBatmanHere = isBatmanHere;
    }
    getIsBatmanHere() {
        return this.isBatmanHere;
    }
}
