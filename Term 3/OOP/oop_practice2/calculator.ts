class Calculator {
    number1 :number;
    number2: number;
    
    constructor(num1?: number, num2?: number) {  
        this.number1 = num1 || 233;
        this.number2 = num2 || 323 ; 
    }

    sum() : number{
        return this.number1 + this.number2;
    }
    subtract() : number {
        return this.number1 - this.number2;
    }
    multiply(): number {
        return this.number1 * this.number2;
    }
    divide(): number {
        return  this.number1 % this.number2;
    }
    divides(): number {
        return  this.number1 / this.number2;
    }
}

let calc = new Calculator(5,3);
console.log("sum of number : " +calc.number1+ " + "+calc.number2+" = "+calc.sum());
console.log("subtraction of number :"+calc.number1+" - "+calc.number2+" = "+calc.subtract());
console.log("multiplication of number : "+calc.number1+" * "+calc.number2+" = "+calc.multiply());
console.log("divide of number : "+calc.number1+"%"+calc.number2+" = " +calc.divide() );
console.log("divide of number : "+calc.number1+"/"+calc.number2+" = " +calc.divides() );




  
