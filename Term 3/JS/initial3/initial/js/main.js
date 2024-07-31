const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');
const color = document.querySelector('#result-color');

// return the color string code like example: #f00233
function colorCode() {
   let code = "#";
   for (let i = 0; i < 6; i++) {
      code += hex[getRandomColor()];
   }
   return code;
}

// return a random number between 0 and 16 (length of hex)
function getRandomColor() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function() {
   const colorValue = colorCode();
   document.body.style.backgroundColor = colorValue;
   color.textContent = colorValue;
});

