"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vichel_1 = require("./Vichel");
class VichelConvoy extends Vichel_1.Vichel {
    constructor(weight, plateID) {
        super(weight, plateID);
    }
    getMaxSpeed() {
        return 100;
    }
}
