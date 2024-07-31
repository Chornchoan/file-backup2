class Person {
    name: string;
    yearOfbird: number;
    constructor(name:string,yearOfbird:number){
        this.name = name;
        this.yearOfbird= yearOfbird;  
    }
    getName(person:Person):string{
        return person.name;
    }
    getyearOfBird(person:Person):number{
       return person.yearOfbird;  
    }
}
class Calendar{
    correntYear: number;
    constructor(currentYear: number) {
      this.correntYear = currentYear;
    }
    getAge(person:Person):number{
         const birthDate = new Date(this.correntYear - person.getyearOfBird(person));
         const today = new Date();
         let age = today.getMonth()- birthDate.getUTCFullYear();   
         return age;
      

    }
}
let johny = new Person("John", 2000);
let calendar = new Calendar(2024);
console.log(`Johny is ${calendar.getAge(johny)} years old.`);

