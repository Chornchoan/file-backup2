import { Vichel } from "./Vichel";

export class BatMobile extends Vichel{
    constructor(weight:string, plateID:number,protected isBatmanHere: boolean){
        super(weight, plateID);
        this.isBatmanHere = isBatmanHere;
    }
    public getIsBatmanHere(): boolean{
        return this.isBatmanHere;
    }

}