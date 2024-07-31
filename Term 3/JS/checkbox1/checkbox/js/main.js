let colors = document.getElementsByName('colors');
function setColor(event){
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
}
for (const color of colors){
    console.log(color);
    color.addEventListener('change',setColor);
}
