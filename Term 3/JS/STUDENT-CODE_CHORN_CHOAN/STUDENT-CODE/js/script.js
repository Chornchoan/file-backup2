// Function 1 (the avg
function averageNum(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test function1:", averageNum(14, 16));

// Function 2 (as example)

function sumString(s1,s2){
    return s1+s2;
}
console.log("test function2:",sumString("ronan"," the best"));

// Function 3 (as example)
function compaer(number){ 
    let first = number[0]
    for (let value of number ){
        if (first!==value){
            return false
        }
    }
    return true;
}
console.log(compaer( [4, 4, 2, 4] )); // Output: true

// Function 4 (as example)
let student = {  name : 'ronan',  age : 17} 
function object (student){
    return student ['name'] +' '+ student['age']
}
console.log("test function4:",' student '+ object(student) + ' year old' );

// Function 5 (as example)

function epualletter(s1,s2){
    for(let values of s1){
        if (values!=s2){
            return false
        }
    }
    return true
}
console.log("test function5:",epualletter('aaa','a'));

// Function 6 (as example)
let arr=[10,2,3,45,7]
function sumNumber(arr){
    let sum=0
    for(let value of arr){
        sum+=value
    }
    return sum
}
console.log("test function6:",sumNumber(arr));

// Function 7 (as example)
let row=2
let col=3

function createArr(row,col){
    let arr2D=[]
    for (let i=0;i<row;i++){
        let arr=[]
        for (let j=0;j<col;j++){
            arr.push(0)
        }
        arr2D.push(arr)
    }
    return arr2D
}
console.log("test function7:",createArr(row,col));

// Function 8 (as example)
let arr1 =[1,3,4]
let arr2 =[2,4,5]
function sumArray (arr1,arr2){
    let arr =[]
    for (let i=0;i<arr1.length;i++){
        let sum =0
        sum=arr1[i]+arr2[i]
        arr.push(sum)
    }
    return arr
}
console.log("test function8:" ,sumArray(arr1,arr2));
