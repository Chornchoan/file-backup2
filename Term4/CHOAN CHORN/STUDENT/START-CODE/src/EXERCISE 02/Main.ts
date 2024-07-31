import { Customer } from "./Customer";
import { Menuitem } from "./MenuItem";
import { Order } from "./Order";

let customer= new Customer('123',"John",[]);
console.log(customer.getId());

let menuitem  = new Menuitem('Pizza','Pizza',9.99);
menuitem.setPrice(7.88);
console.log(menuitem);

let orders = new Order([],12,"Alice");




