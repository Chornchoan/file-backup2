// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
newarray =[]
for (value of arr){
    if(value<5){
        values=value+(9-value)
        newarray.push(values)
    }else{
        newarray.push(value)
    }
}
console.log(newarray);
// output: [9, 9, 6, 7, 9]

