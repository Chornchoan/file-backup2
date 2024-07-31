"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minivan = void 0;
const Vichel_1 = require("./Vichel");
class Minivan extends Vichel_1.Vichel {
    constructor(weight, plateID, numberCustomers, numberLuggage) {
        super(weight, plateID);
        this.numberCustomers = numberCustomers;
        this.numberLuggage = numberLuggage;
        this.numberCustomers = numberCustomers;
        this.numberLuggage = numberLuggage;
    }
    getNumberCustomers() {
        return this.numberCustomers * 5;
    }
    getNumberLuggage() {
        return this.numberLuggage;
    }
}
exports.Minivan = Minivan;
