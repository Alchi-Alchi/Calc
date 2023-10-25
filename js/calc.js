let a = document.querySelector("#a");
let b = document.querySelector("#b");
let numInput = Array.from(document.querySelectorAll(".numInput"));
let operator = document.querySelector("#operator");
let result = document.querySelector("#result");
let firstNumber;
let secondNumber;
let symbol;
let count;
//Проверка на числа, десятичную точку и минус
numInput.forEach(function(elem) {
    elem.addEventListener('keypress', function(e) {
    (/[^0-9.\-]/.test(e.key)) ? e.preventDefault(): null;
    });
    elem.addEventListener('keyup', function(e) {
        elem.value.split('')[0] == "." ? elem.value = "": null;
    });
    elem.addEventListener('keyup', function(e) {
        let drops = elem.value.split('').filter((item) => item === ".");
        drops.length > 1 ? elem.value = "": null;
    });
    elem.addEventListener('keyup', function(e) {
        elem.value.split('').includes("-", 1) ? elem.value = "" : null;
    });
});
//Проверка на операторы
operator.addEventListener('keypress', function(e) {
    (/[^*+/-]/.test(e.key)) ? e.preventDefault(): null;
});
//Функция присваивания
function assignment () {
    a.addEventListener('keyup', function(e) {
        firstNumber = a.value;
        operation();
    });
    operator.addEventListener('keyup', function(e) {
        symbol = operator.value
        operation();
    });
    b.addEventListener('keyup', function(e) {
        secondNumber = b.value;
        operation();
    });
}
assignment();
//Функция вычисления
function operation () {
    switch (symbol) {
        case "+":
        count = Number(firstNumber) + Number(secondNumber);
        break;
        case "-":
        count = Number(firstNumber) - Number(secondNumber);
        break;
        case "*":
        count = Number(firstNumber) * Number(secondNumber);
        break;
        case "/":
        count = Number(firstNumber) / Number(secondNumber);
        break;
    }
    outputResult();
}
//Функция вывода
function outputResult () {
    a.value && b.value && operator.value != "" ? result.innerHTML = count: result.innerHTML = "";
}