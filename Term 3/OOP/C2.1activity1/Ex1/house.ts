class tree{
    size:number;
    constructor(size: number){
        this.size = size;
    }
}
class house{
    numberDoor: number;
     owner: string
     trees:tree[] = [];
 
    constructor (owner :string, numDoor : number) {
       this.owner=owner;
       this.numberDoor=numDoor;
    
     }
 
     addTree(tree:tree){
         this.trees.push(tree);
     }
     getinfo():void{
        console.log("This is House Number "+this.numberDoor+" Owned by  "+this.owner +" and has " + this.trees.length+ " Trees");
}
}
let  myhouse = new house("John",2);

let tree1 = new  tree(50);
let tree2 =  new  tree(30);

myhouse.addTree(tree1);
myhouse.addTree(tree2);
myhouse.getinfo();
console.log(myhouse);


