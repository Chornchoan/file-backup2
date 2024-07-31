function randomWord() {
    // todo 
    let ranDom = textElement;
    let array = ranDom.textContent.split(' ')
    // console.log(array);
    // console.log(Math.floor(Math.random() *array.length));
    let showWord = (Math.floor(Math.random() *array.length));
    output.textContent=array[showWord]
}

const textElement = document.querySelector('.text');
const output = document.querySelector('#output');
// todo 



setInterval(randomWord, 1000);