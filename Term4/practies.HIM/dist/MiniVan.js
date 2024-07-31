"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniVan = void 0;
const Vehicle_1 = require("./Vehicle");
class MiniVan extends Vehicle_1.Vehicle {
    constructor(weight, plateID, numberCustomers, numberLuggage) {
        super(weight, plateID);
        this.numberCustomers = numberCustomers;
        this.numberLuggage = numberLuggage;
    }
    getNumberCustomers() {
        return this.numberCustomers;
    }
    getNumberLuggage() {
        return this.numberLuggage;
    }
    getSpeed() {
        let speed = 130;
        speed -= this.numberCustomers * 10;
        speed -= this.numberLuggage * 5;
        return speed;
    }
}
exports.MiniVan = MiniVan;
