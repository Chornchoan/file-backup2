let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let sum =0
let start = false
for(let value of numbers){
    if (value==1 && !start){
        start=true
    }else if(value==0){
        start =false
    }else if(start){
        sum+=value
    }
}
console.log(sum);


// output: 14 becuase 3 + 5 + 1 + 2 + 3





