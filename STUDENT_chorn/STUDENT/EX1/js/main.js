let text = "hello world [JavaScript] we [are] strong!";
let res =""
let isSrting = true
for(i = 0; i< text.length; i++){
    if(text[i]=="["){
        isSrting=false
    }else if(isSrting && text[i]!="]"){
        res +=text[i]
    }else if (text[i]=="]"){
        isSrting =true
    }
}   
console.log(res);


// output: hello world we strong!


