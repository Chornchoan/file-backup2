class Person {
    private name: string;
    private yearOfBirth: number;
  
    constructor(name: string, yearOfBirth: number) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
    }
  
    public computeAge(currentYear: number): number {
      return currentYear - this.yearOfBirth;
    }
  }
  
  class Calendar {
    private currentYear: number;
  
    constructor(currentYear: number) {
      this.currentYear = currentYear;
    }
  
    public getCurrentYear(): number {
      return this.currentYear;
    }
  }
  
  // Testing the model
  const calendar = new Calendar(2024);
  const person1 = new Person("John", 1990);
  const person2 = new Person("Alice", 1985);
  
  console.log("John age is :",person1.computeAge(calendar.getCurrentYear())); 
  console.log("Alice age is :",person2.computeAge(calendar.getCurrentYear())); 