let arrOne =[1,3,6,7,9]
let arrTwo =[4,3,5,9,1]
let newarr =[]
for (i =0;i<arrOne.length;i++){
    if (arrOne[i]>arrTwo[i]){
        newarr.push(arrOne[i])
    }else{
        newarr.push(arrTwo[i])
    }
}
console.log(newarr);