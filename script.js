var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDivision = document.getElementById('buttonDivision');
var inputResult = document.getElementById('result');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function makeOperation(operationType) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationType === '+') {
        var result = number1 + number2;
    } else if (operationType === '-') {
        var result = number1 - number2;
    } else if (operationType === '*') {
        var result = number1 * number2;
    } else if (operationType === '/') {
        var result = number1 / number2;
    } else { var result = 'unknown operation' }
    inputResult.placeholder = result;
}

function onOperationButtonClick(eventObject) {

    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}



var arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivision]

for (var i = 0; i < arrayOfButtons.length; i++) {
    var button = arrayOfButtons[1]
    arrayOfButtons[i].addEventListener('click', onOperationButtonClick);
}