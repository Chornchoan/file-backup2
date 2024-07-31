var account1 = { balance: 500, name: "Alice" };
function debit(account1, valueDollar) {
    account1.balance += valueDollar;
}
;
debit(account1, 300);
console.log(account1);
function credit(account1, valueDollars) {
    account1.balance -= valueDollars;
}
credit(account1, 200);
console.log(account1);
