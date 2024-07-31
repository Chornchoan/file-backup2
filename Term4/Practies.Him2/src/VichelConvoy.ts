import { Vichel } from "./Vichel";

export class VichelConvoy extends Vichel{
    constructor(weight:string,plateID:number){
        super(weight,plateID);
    }
    getMaxSpeed(){
        return 100;
    }
}