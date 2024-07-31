// Q2 - Create a MAIN.TS file to test your SCHOOL MODEL

import { Classroom, School, Student } from "./SCHOOL";

//create 4 students
let student1 = new Student("Yon","Yen");
let student2 = new Student("Him","Hey");
let student3 = new Student("Rady","Y");
let student4 = new Student("Ronan","Orge");

//create 2 school

let school = new School("pnc");
let school2 = new School("pnv");

//create 2 classroom

let classroom1 = new Classroom(school,"web-a");
let classroom2 = new Classroom(school,"web-b");
let classroom3 = new Classroom(school2,"2024a");
let classroom4 = new Classroom(school2,"2024b");

classroom1.addStudent(student1)
console.log(classroom1.getNumberOfStudents());

school.addClassroom("web-b")
console.log(school);