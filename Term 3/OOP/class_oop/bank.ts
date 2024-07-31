class BankAccount {
    balance : number;
    name: string;

// }
    //use by vorible//////////////////////////////////
// let myAccount = new  BankAccount();
// myAccount.balance=500;
// myAccount.name="John Doe";
// console.log(myAccount); 

//use by constructor//////////////////////////////////
constructor(balance:number, name:string){
    this.balance =balance;
    this.name = name;
};
}
let  myAccount = new BankAccount(300,"John Doe");
console.log(myAccount);


