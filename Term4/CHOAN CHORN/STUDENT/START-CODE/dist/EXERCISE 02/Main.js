"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Order_1 = require("./Order");
let customer = new Customer_1.Customer("123", "John", Order_1.Order[Order_1.Order["Pizza"]]);
let menuitem = new Customer_1.Customer.MenuItem(customer, 456, "Pasta");
console.log(`menu item id: ${menuitem.id}`);
let order = new Order_1.Order([menuitem], 100, "John");
order.addItemToOrder(new Customer_1.Customer.MenuItem(customer, 789, "Wings"));
console.log(`number of items in the order: ${order.itemsInOrder()}`);
let restaurant = new Customer_1.Customer.MenuItem(customer, "789", "Restaurant");
restaurant.addSubItem(menuitem);
console.log("\n\nrestaurant sub items:\n");
for (let i = 0; i < restaurant.subItems.length; i++) {
    console.log(restaurant.subItems[i].id);
}
