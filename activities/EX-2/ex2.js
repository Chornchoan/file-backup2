buttonOn = document.getElementById('on')
buttonOff = document.getElementById('off')
img  = document.querySelector('img');
buttonOn.addEventListener('click', function(){
    // Change from pic_bulboff.gif to pic_bulbon.gif image  when we click on buttonOn
    img.src="pic_bulbon.gif";
})
buttonOff.addEventListener('click', function(){
    //TODO: Change from pic_bulbon.gif to pic_bulboff.gif image  when we click on buttonOff
    // your code here
    img.src="pic_bulboff.gif";
})