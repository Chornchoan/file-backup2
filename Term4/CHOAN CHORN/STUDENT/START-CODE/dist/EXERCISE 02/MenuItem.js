"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menuitem = void 0;
class Menuitem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    setPrice(newPrice) {
        if (typeof newPrice === 'number') {
            this.price = newPrice;
        }
        else {
            console.log('Invalid input! Please enter a valid number.');
        }
    }
}
exports.Menuitem = Menuitem;
