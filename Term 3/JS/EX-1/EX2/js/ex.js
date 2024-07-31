// let color1 ='red';
// let color2 ='blue';
// let position= 'to right';

// //Template strings
// document.body.style.background=`linaer-gradient(${position},${color1},${color2})`;

// // document.body.style.background=`linaer-gradient('+position+','+color1+','+color2+)`;

let position = 'to right';
let color1 = 'green';
let color2 = 'black'

// Template strings
document.body.style.background =`linear-gradient(${position}, ${color1} , ${color2})`;

// simple connect value with string
document.body.style.background ='linear-gradient('+position+','+color1+','+color2+')';