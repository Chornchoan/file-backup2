class Persons{
    name = "aa";
    printme(){
        console.log("name:"+this.name);
    }

}
class employees extends Persons{
    salary = 1000;
    printme(){
        super.printme();
        console.log("salary:"+this.salary);
    }

}
let ronan = new employees();
ronan.printme()
// console.log(ronan);
