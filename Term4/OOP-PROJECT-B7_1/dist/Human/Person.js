"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
