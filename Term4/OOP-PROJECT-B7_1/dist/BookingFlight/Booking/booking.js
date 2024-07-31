"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeTickets = exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(bookingID, bookingReference) {
        this.bookingID = bookingID;
        this.bookingReference = bookingReference;
    }
    Booking.prototype.getBookingID = function () {
        return this.bookingID;
    };
    return Booking;
}());
exports.Booking = Booking;
var TypeTickets;
(function (TypeTickets) {
    TypeTickets[TypeTickets["return_Ticket"] = 0] = "return_Ticket";
    TypeTickets[TypeTickets["single_Ticket"] = 1] = "single_Ticket";
})(TypeTickets || (exports.TypeTickets = TypeTickets = {}));
