class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, phone) {
        super(name, age);
        this.phone = phone;
    }
}
class School {
    constructor(name) {
        this.name = name;
    }
}
class Class {
    constructor(name) {
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
let myClass = new Class("Math");
myClass.name; // Math
console.log(student, myClass, myschool);
