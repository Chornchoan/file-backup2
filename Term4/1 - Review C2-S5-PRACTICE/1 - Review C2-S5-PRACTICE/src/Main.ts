import { Store } from "./Store";
import { Product } from "./Product";
import { Customer } from "./Customer";
import { Feedback } from "./Feedback";

// CUSTOMERS     
let john = new Customer("John", "smit");
let Rady = new Customer("Rady", "Div");

// PRODUCTS  & FEEDBACKS 
let Sosi = new Product("Sosi", 3);
Sosi .addFeedbacks(new Feedback(john, "Good", 100));
Sosi .addFeedbacks(new Feedback(Rady, "not good", 100));

let br = new Product("BR", 100);
br.addFeedbacks(new Feedback(john, "I very love it", 50));
br.addFeedbacks(new Feedback(Rady, "I have it", 50));

let Milt = new Product("Milt", 20);
let Sting = new Product("Sting", 40);

// STORE 
let aeon = new Store("Aeon");
aeon.addCustomers(john, Rady);
aeon.addProducts(Sosi , Milt, Sting, br);

//  TEST RESULT

console.log(aeon.getCommentsFrom(john));
console.log(aeon.getProductsLessThan(35));

console.log(aeon.getFeedbacksWith("very"));
