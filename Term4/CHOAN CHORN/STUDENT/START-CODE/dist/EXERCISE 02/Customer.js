"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(CustomId, CustomName, orders) {
        this.CustomId = CustomId;
        this.CustomName = CustomName;
        this.orders = orders;
        this.CustomId = CustomId;
        this.CustomName = CustomName;
        this.orders = orders;
    }
    getId() {
        return this.CustomId;
    }
    getName() {
        return this.CustomName;
    }
    addOrder(order) {
        this.orders.push(order);
    }
}
exports.Customer = Customer;
