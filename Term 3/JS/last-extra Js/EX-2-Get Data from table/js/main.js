let rows = document.querySelectorAll('tbody tr')
let firstName=[];
let lastName =[];
let email=[];
let phone=[];

for(let row of  rows ){
    firstName.push(row.children[0].textContent)
    lastName.push(row.children[1].textContent)
    email.push(row.children[2].textContent)
    phone.push(row.children[3].textContent)
}

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(phone);

