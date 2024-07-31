"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Person_1 = require("../Person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salary, workHour, firstName, lastName, email, phone) {
        var _this = _super.call(this, firstName, lastName, email, phone) || this;
        _this.salary = 0; //by default
        _this.salary = salary;
        _this.wordHour = workHour;
        return _this;
    }
    Employee.prototype.getPassengerSalary = function () {
        return this.salary;
    };
    return Employee;
}(Person_1.Person));
exports.Employee = Employee;
