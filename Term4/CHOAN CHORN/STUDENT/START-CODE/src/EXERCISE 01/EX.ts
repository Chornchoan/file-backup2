 abstract class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name; 
        this.age = age;
    }
}

class Student extends Person {
    phone: string;
    constructor(name: string, age: number, phone: string) {
        super(name, age);
        this.phone = phone;
    }
}

class School {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Class {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}
// create a new class object

let student = new Student("John", 25, "0128934569");
student.name; // John
student.age; // 25
student.phone; // 0128934569

let myschool = new School("Tech High School");
myschool.name; // Tech High School

let myClass = new Class("Math")
myClass.name; // Math

console.log(student,myClass,myschool);

