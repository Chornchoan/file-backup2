type BankAccount = {
    balance: number;
    name:string

};
let  account1:BankAccount={balance:500,name:"Alice"};

function debit(account1:BankAccount, valueDollar:number){
    account1.balance += valueDollar;
    
};
debit(account1,300);
console.log(account1)

function credit(account1:BankAccount, valueDollars:number){
    account1.balance -= valueDollars;
}

credit(account1,200);
console.log(account1);
