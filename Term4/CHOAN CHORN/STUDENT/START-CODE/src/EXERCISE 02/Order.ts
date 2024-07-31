import { Menuitem } from "./MenuItem";

export class Order {
    addProduct(arg0: { id: string; name: string; }) {
        throw new Error("Method not implemented.");
    }
    itemsInOrder() {
        throw new Error("Method not implemented.");
    }
    addItemToOrder(arg0: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private Item:Menuitem[], private Total:number, private CustomerName:string) {
        this.Item = Item;
        this.Total = Total;
        this.CustomerName = CustomerName;
    }
    GetItem():Menuitem[] {
        return this.Item;
    }
    GetTotal():number {
        return this.Total;
    }
    GetCustomerName():string {
        return this.CustomerName;
    }
    SetItem(Item:Menuitem[]) {
        this.Item = Item;
    }
}