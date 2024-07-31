import { Meal } from "../Flight/meal";
import { Baggages } from "./bagages";
export class Booking{
    bookingID: string;
    bookingReference: string;
    bookingFlight: string;
    constructor(bookingID:string, bookingReference:string){
        this.bookingID = bookingID;
        this.bookingReference = bookingReference;
    }
    getBookingID(){
        return this.bookingID;
    }

}

export enum TypeTickets{
    return_Ticket,
    single_Ticket,
}