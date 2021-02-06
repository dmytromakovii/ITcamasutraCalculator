var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDivision = document.getElementById('buttonDivision');
var inputResult = document.getElementById('result');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDivision.addEventListener('click', onOperationButtonClick);


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












































// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDivision = document.getElementById('buttonDivision');

// function onButtonPlusClick() {
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var sum = number1 + number2;

//     console.log(sum);
// }

// function onButtonMinusClick() {
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var sum = number1 - number2;

//     console.log(sum);
// }

// function onButtonMultiplyClick() {
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var sum = number1 * number2;

//     console.log(sum);
// }

// function onButtonDivisionClick() {
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var sum = number1 / number2;

//     console.log(sum);
// }

// buttonPlus.addEventListener('click', onButtonPlusClick);

// buttonMinus.addEventListener('click', onButtonMinusClick);

// buttonMultiply.addEventListener('click', onButtonMultiplyClick);

// buttonDivision.addEventListener('click', onButtonDivisionClick);