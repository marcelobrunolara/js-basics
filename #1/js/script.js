var window = window.addEventListener('load', start);

function start(){

    function redRangeChannel(event){
        redValue.value = event.target.value;
        setSquareValue();
    }
    function greenRangeChannel(event){
        greenValue.value = event.target.value;
        setSquareValue();
    }
    function blueRangeChannel(event){
        blueValue.value = event.target.value;
        setSquareValue();
    }
    function setSquareValue(){
        var currentColor = `rgb(${redValue.value},${greenValue.value},${blueValue.value})`
        console.log(currentColor);
        square.style.backgroundColor = currentColor;
    }
    
    console.log("Page is ready to start.");

    var square = document.querySelector("#square");

    var redValue = document.querySelector("#red-value");
    var greenValue = document.querySelector("#green-value");
    var blueValue = document.querySelector("#blue-value");
    
    document.querySelector("#red-channel").addEventListener('change', redRangeChannel);
    document.querySelector("#green-channel").addEventListener('change', greenRangeChannel);
    document.querySelector("#blue-channel").addEventListener('change', blueRangeChannel);
}

