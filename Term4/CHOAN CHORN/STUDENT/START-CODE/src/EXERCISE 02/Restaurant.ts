import { Menuitem } from "./MenuItem";
import { Order } from "./Order";

class Restaurant {
    menuLst: Menuitem;
    orderLiest: Order;
    constructor (menuLst: Menuitem, orderLiest:Order){
        this.menuLst = menuLst;
        this.orderLiest = orderLiest;
    }
    printMenu(){
        console.log(this.menuLst);
    }
   

}