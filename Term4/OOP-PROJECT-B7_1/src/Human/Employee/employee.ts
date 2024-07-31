import { Person } from "../Person";

export abstract class Employee extends Person{
    private salary: number = 0; //by default
    private wordHour: number
    firstName : string
    lastName : string
    constructor(salary: number, workHour: number, firstName: string, lastName: string, email: string, phone: number){
        super(firstName, lastName, email, phone);
        this.salary = salary;
        this.wordHour = workHour;
    }
    getPassengerSalary(){
        return this.salary;
    }
}