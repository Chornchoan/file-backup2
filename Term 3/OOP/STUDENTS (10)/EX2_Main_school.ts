class Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Classroom {
  private name: string;
  private school: School;
  private students: Student[] = [];

  constructor(school: School, name: string) {
    this.school = school;
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
}

class School {
  private name: string;
  private classrooms: Classroom[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addClassroom(classroomName: string): Classroom {
    let newCLassroom = new Classroom(this, classroomName);
    this.classrooms.push(newCLassroom);
    return newCLassroom;
  }
}

//create  a new student and classroom
let john = new Student("John", "Doe");
console.log(john.getFullName());

let mySchool = new School("My School");
let hisClasroom = mySchool.addClassroom("His Clasroom");
hisClasroom.addStudent(john);
mySchool.addClassroom("Her Clasroom").addStudent(john);
console.log(hisClasroom.getNumberOfStudents() ,mySchool.addClassroom("Her Clasroom") ); 