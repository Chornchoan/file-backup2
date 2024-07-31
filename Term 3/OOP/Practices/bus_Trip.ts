class Trip{
    busName:string;
}

class Address{
    city: string;
    street: string;
}

class customer{
    firstName: string;
    lastName: string;
    address:Address;

    constructor(firstName:string, lastName:string, city:string, street:string){
        this.firstName = firstName;
        this.lastName = lastName; 
        
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
    
}
let john = new customer("John", "Doe", "New York","5th Avenue");
console.log(`Customer name is ${john.getFullName()}`); // Custome