class webAlumni {
    Experience_in_VueJS: number;
    Experience_in_NodeJS: number;
    can_code_oop: boolean;

    constructor(Experience_in_VueJS: number, Experience_in_NodeJS: number,can_code_oop:boolean){  
        this.Experience_in_VueJS = Experience_in_VueJS;  
        this.Experience_in_NodeJS = Experience_in_NodeJS;  
        this.can_code_oop= can_code_oop;  
    }
    
    getSalary():number{
        let saLary = 250;
        if ( this.Experience_in_VueJS >= 1 ){
            saLary += 100;  
        };
        if (this.Experience_in_NodeJS >= 1) {
            saLary += 100
        }
        if(this.can_code_oop == true){
            saLary+= 250

        }
        
        return saLary;
    }

   

  

};
let  alumno1 = new webAlumni(0.5,0.5,false);
let  alumno2 = new webAlumni(1,0.5,false);
let  alumno3 = new webAlumni(2,2,false);
let  alumno4 = new webAlumni(2,2,true);

console.log(alumno1.getSalary());
console.log(alumno2.getSalary());
console.log(alumno3.getSalary());
console.log(alumno4.getSalary());
