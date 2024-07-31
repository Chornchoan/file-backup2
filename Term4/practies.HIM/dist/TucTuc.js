"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TucTuc = void 0;
const Vehicle_1 = require("./Vehicle");
class TucTuc extends Vehicle_1.Vehicle {
    constructor(weight, plateID, numberCustomers) {
        super(weight, plateID);
        this.numberCustomers = numberCustomers;
    }
    getNumberCustomers() {
        return this.numberCustomers;
    }
    getSpeed() {
        let speed = 130;
        speed -= this.numberCustomers * 5;
        return speed;
    }
}
exports.TucTuc = TucTuc;
