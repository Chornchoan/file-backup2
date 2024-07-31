import { Seat } from "./seat";

export class Aeroplanes{
    constructor(private referenceNumber: string, private seat: Seat[] = []){
        this.referenceNumber = referenceNumber
    }
    addSeat(seat: Seat){
        return this.seat.push(seat)
    }
}


let seat1 = new Seat(13);
let Aeroplane1 = new Aeroplanes("PHN");
Aeroplane1.addSeat(seat1);
console.log(Aeroplane1);