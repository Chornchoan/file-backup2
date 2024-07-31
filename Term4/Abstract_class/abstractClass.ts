abstract class  Animal  {
    private name: string;
    constructor(name:string) {
        this.name = name;
        
    }
    // Abstract method 
    abstract playSound(sound:string): void;
    
    //Nomal method 
    getName() { return this.name; }
}
class Dog extends Animal {
    constructor (name : string){
        super(name);
    }
    playSound(sound: string): void {
        // throw new Error("Method not implemented.");
        console.log(sound)
    }
}

class Cat extends Animal {
    constructor (name : string){
        super(name);
    }
    playSound(sound: string): void {
        console.log(sound);
        
    }
}

class Cow extends Animal {
    constructor (name : string){
        super(name);
    }
    playSound(sound: string): void {
        console.log(sound);
        
    }
}
let dog1 = new Dog('Dog1:');
dog1.playSound("Dog sound is:"+ " " + "Woof!");

let cat1 = new Cat('Cat1:');
cat1.playSound("Cat sound is:"+ " " +"Meow!");

let cow1 = new Cow('Cow1:');
cow1.playSound("Cow sound is:"+ " " + "Moo");


