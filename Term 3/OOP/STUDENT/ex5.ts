// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)

const sequence: number[] = [1, 2, 3, 4, 5, 6]; //arrays type
const animals: string[] = ["pangolin", "monkey", "cat", "dog"]; //Unoin type
const stringsAndNumbers:(string|number)[] = [1, "one", 2, "two", 3, "three"]; // any type
const allMyArrays: (string|number)[][] =[sequence, animals, stringsAndNumbers]; // we can put any type
console.log("Exercise 1.5", allMyArrays);
