"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    itemsInOrder() {
        throw new Error("Method not implemented.");
    }
    addItemToOrder(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor(Item, Total, CustomerName) {
        this.Item = Item;
        this.Total = Total;
        this.CustomerName = CustomerName;
        this.Item = Item;
        this.Total = Total;
        this.CustomerName = CustomerName;
    }
    GetItem() {
        return this.Item;
    }
    GetTotal() {
        return this.Total;
    }
    GetCustomerName() {
        return this.CustomerName;
    }
    SetItem(Item) {
        this.Item = Item;
    }
}
exports.Order = Order;
