class bob {
    private name: string = "test"

    getName(){
        return  this.name;
    
    }

}
let  mybob = new bob();
let bobName = mybob.getName() ;
bobName = "ronan"
console.log(mybob.getName())