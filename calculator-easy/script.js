function addNumbers() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
}

function subNumbers() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = firstNumber - secondNumber;
}

function multiplicationNumbers() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = firstNumber * secondNumber;
}

function divisionNumbers() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = firstNumber / secondNumber;
}