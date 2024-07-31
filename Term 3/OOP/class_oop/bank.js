var BankAccount = /** @class */ (function () {
    // }
    // let myAccount = new  BankAccount();
    // myAccount.balance=500;
    // myAccount.name="John Doe";
    // console.log(myAccount); 
    function BankAccount(balance, name) {
        this.balance = balance;
        this.name = name;
    }
    ;
    return BankAccount;
}());
var myAccount = new BankAccount(300, "John Doe");
console.log(myAccount);
