"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurant {
    constructor(menuLst, orderLiest) {
        this.menuLst = menuLst;
        this.orderLiest = orderLiest;
    }
    printMenu() {
        console.log(this.menuLst);
    }
}
