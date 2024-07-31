class Person{
    private name: string
    private yearOfBirth: number
    constructor(name: string, yob: number) {
        this.name = name
        this.yearOfBirth=yob
    }
    getName(): string{
        return this.name
    }
    getYearOfBirth(): number{
        return this.yearOfBirth
    }
}

class Calendar{
    private currentYear: number
    constructor(currentYear: number) {
        this.currentYear=currentYear
    }
    getAge(person:Person): number{
        return this.currentYear - person.getYearOfBirth()
    }
}

let sovanda = new Person("Sovanda", 1990);
let him = new Person("Him", 2000);
let today = new Calendar(2021);

console.log(today.getAge(sovanda));
console.log(today.getAge(him));

