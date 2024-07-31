class BAC {
    private name: string;
    private balance: number = 0;

    constructor(name: string) {
        this.name = name;
    
    } 
debit(amount: number){
    if (this.balance - amount >= 0){
        this.balance -= amount;
    }

    
}
   
}
let ronanAccount = new  BAC("Ronan");
ronanAccount.debit(50);
console.log(ronanAccount);
