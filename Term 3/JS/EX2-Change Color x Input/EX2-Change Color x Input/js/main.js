


function changeColor() {
    // TODO
    // change body color to color that get from input type color 
        //  how to  first 
    //    const colorInput = document.querySelector("#color")
    //    const colorValue = colorInput.value;
    //    document.body.style.backgroundColor = colorValue;
        // how to write  second
    document.body.style.background=inputColor.value;
}


// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)