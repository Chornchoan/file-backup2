// UML Diagram:
// School: 1 --- * Classroom
// Classroom: 1 --- * Student

class School {
    private classrooms: Classroom[];
  
    constructor() {
      this.classrooms = [];
    }
  
    public addClassroom(classroom: Classroom): void {
      this.classrooms.push(classroom);
    }
  }
  
  class Classroom {
    private students: Student[];
  
    constructor() {
      this.students = [];
    }
  
    public addStudent(student: Student): void {
      this.students.push(student);
    }
  }
  
  class Student {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  // Testing the model
  const school = new School();
  const classroom1 = new Classroom();
  const classroom2 = new Classroom();
  const student1 = new Student("John");
  const student2 = new Student("Alice");
  const student3 = new Student("Bob");
  const student4 = new Student("Eve");
  
  classroom1.addStudent(student1);
  classroom1.addStudent(student2);
  classroom2.addStudent(student3);
  classroom2.addStudent(student4);
  
  school.addClassroom(classroom1);
  school.addClassroom(classroom2);

  console.log(school);