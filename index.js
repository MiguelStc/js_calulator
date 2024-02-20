// calculator
//get what's displayed
const display = document.getElementById("display");

// add what's clicked to display screen
function appendToDisplay(input){
    display.value += input;

}
// empty display top
function clearDisplay(){
    display.value="";
}


// calculate the values on screen
function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}