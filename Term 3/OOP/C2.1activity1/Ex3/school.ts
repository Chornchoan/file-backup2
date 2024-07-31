class School{
    schoolName:string;
    Dirctors:Dirctor[]= [];
    Students: Student[]= [];

    constructor(schoolName: string){
        this.schoolName = schoolName;
       
    }
    addDirector(director: Dirctor) {
        this.Dirctors.push(director);
    }
    addStudent(student: Student) {
       this.Students.push(student);  
    }
}
class Student{
    studentName:string;
    age:number;
    constructor( studentName:string,age:number){
        this.studentName=studentName;
        this.age=age;
    }
}
class Dirctor{
    directorName:string;
    age:number;
    constructor(directorName:string,age:number) {  
       this.directorName = directorName;  
       this.age = age; 
    }

}
let ThisSchool = new  School("My School");
ThisSchool.addDirector(new Dirctor('Mr.Bubi',52));

ThisSchool.addStudent(new Student('Tom',10));
ThisSchool.addStudent(new Student('Jerry',9));
ThisSchool.addStudent(new Student('Spike',11));
console.log(ThisSchool); 