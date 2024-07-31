import { Order } from "./Order";

 export class Customer {
    static MenuItem: any;
    constructor(  private CustomId: string,private CustomName: string,private orders:Order[]){
        this.CustomId = CustomId;
        this.CustomName = CustomName;
        this.orders = orders;
    }
    getId(): string {
        return this.CustomId;
    }
    
    getName(): string {
        return this.CustomName;
    }
    addOrder(order: Order) :void{
       this.orders.push(order);
    }

}