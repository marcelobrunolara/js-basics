/* 
Author: Marcelo Lara  
Handle input typed range values into RGB colors to apply in square div background color.
*/

var window = window.addEventListener('load', start);

function start(){

    function handleRedChannel(event){
        redValue.value = event.target.value;
        setSquareValue();
    }

    function handleGreenChannel(event){
        greenValue.value = event.target.value;
        setSquareValue();
    }

    function handleBlueChannel(event){
        blueValue.value = event.target.value;
        setSquareValues();
    }

    function setSquareValues(){
        var currentColor = `rgb(${redValue.value},${greenValue.value},${blueValue.value})`
        console.log(currentColor);
        square.style.backgroundColor = currentColor;
    }
    
    console.log("Page is ready to start.");

    var square = document.querySelector("#square");

    var redValue = document.querySelector("#red-value");
    var greenValue = document.querySelector("#green-value");
    var blueValue = document.querySelector("#blue-value");
    
    document.querySelector("#red-channel").addEventListener('change', hangleRedChannel);
    document.querySelector("#green-channel").addEventListener('change', handleGreenChannel);
    document.querySelector("#blue-channel").addEventListener('change', handleBlueChannel);
}

