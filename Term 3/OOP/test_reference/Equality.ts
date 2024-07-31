// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1==arr2);

class STUDENT{
    constructor(private name:string){
        this.name=name;
    }
    isEqual(other:STUDENT){
        return  this.name===other.name;
    }
}
let stu1 =new STUDENT("hak");
let  stu2= new STUDENT("hak");
console.log(stu1.isEqual(stu2)) ;
