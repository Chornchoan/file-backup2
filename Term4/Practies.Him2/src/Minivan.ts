import { Vichel } from "./Vichel";

export class Minivan extends Vichel{
    constructor(weight:string,plateID:number, protected numberCustomers: number,protected numberLuggage: number){
        super(weight,plateID);
        this.numberCustomers = numberCustomers;
        this.numberLuggage = numberLuggage;
    }
    getNumberCustomers(): number{
        return this.numberCustomers*5;
    }
    getNumberLuggage(): number{
        return this.numberLuggage;
    }
}