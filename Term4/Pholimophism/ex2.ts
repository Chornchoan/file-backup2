abstract class Employees {
    private cotracts: Comercail[]=[];  
    private teamMember:Employees[]=[]

    constructor(private name:string, private employeeType:string){

    }

    abstract getSalary():number;

}

class Comercail extends Employees{
    
    constructor (name: string,) {
        super(name)
    } 

    getSalary() : number {
        return 50000
    }
}

class Manager extends Employees{
    getSalary(): number {
        throw new Error("Method not implemented.");
    }
    private department:string

    constructor(name:string,department:string) {
       super(name,"Manager")
       this.department = department
    }
}

class Developer{
    private name:string
}