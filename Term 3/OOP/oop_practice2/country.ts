class Countris {
    name: string;
    population: number;
    capitalName: string;
    corrency: string;

constructor(name:string,population:number,capitalName:string,corrency:string){
    this.name=name;
    this.population = population;
    this.capitalName=capitalName;
    this.corrency=corrency;
    
}
getInformation():string{
    return `welcome to ${this.name}, ${this.population}  millions people, cpital ${this.capitalName}   and  corrency ,${this.corrency}`;
}
} 

let france = new Countris("france",70 ,"paris","Euro" );
console.log(france);
let cambodia = new Countris("cambodia",17,"Phnom Penh","Riel" );
console.log(cambodia);
let UK = new Countris("UK",80,"London","Pound" );
console.log(UK);
// for get informetion of  each country we will use the method getInformation()
let information = france.getInformation();
console.log(information);

