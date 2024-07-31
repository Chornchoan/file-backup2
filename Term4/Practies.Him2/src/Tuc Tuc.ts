import { Vichel } from "./Vichel";

export class TucTuc extends Vichel{
    constructor(weight: string,plateID: number ,protected numberCustomer: number){
        super(weight,plateID)
        this.numberCustomer = numberCustomer;
    }
    getNumberCustomer(): number{
        return this.numberCustomer;
    }
    
  
}