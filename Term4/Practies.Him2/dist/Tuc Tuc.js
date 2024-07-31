"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TucTuc = void 0;
const Vichel_1 = require("./Vichel");
class TucTuc extends Vichel_1.Vichel {
    constructor(weight, plateID, numberCustomer) {
        super(weight, plateID);
        this.numberCustomer = numberCustomer;
        this.numberCustomer = numberCustomer;
    }
    getNumberCustomer() {
        return this.numberCustomer;
    }
}
exports.TucTuc = TucTuc;
