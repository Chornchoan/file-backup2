class Person {
    constructor(private name:string){}
}

class Student extends Person {
    constructor(name:string){
        super(name);
    }
    
 }
 let student = new Student("John");
 console.log(student) 