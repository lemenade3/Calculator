let add = ((a, b) => a + b);
let subtract = ((a, b) => a - b);
let multiply = ((a, b) => a * b);
let divide = ((a, b) => a / b);
let operate = ((operator, a, b) => operator(a, b));

let output = document.querySelector('#output');

let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let b7 = document.querySelector('#b7');
let b8 = document.querySelector('#b8');
let b9 = document.querySelector('#b9');
let b0 = document.querySelector('#b0');
let equals = document.querySelector('#equals');
let addBtn = document.querySelector('#add');
let subtractBtn = document.querySelector('#subtract');
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');

let selectedOperator;
let a;
let b;

b1.addEventListener('click', () => output.textContent += 1);
b2.addEventListener('click', () => output.textContent += 2);
b3.addEventListener('click', () => output.textContent += 3);
b4.addEventListener('click', () => output.textContent += 4);
b5.addEventListener('click', () => output.textContent += 5);
b6.addEventListener('click', () => output.textContent += 6);
b7.addEventListener('click', () => output.textContent += 7);
b8.addEventListener('click', () => output.textContent += 8);
b9.addEventListener('click', () => output.textContent += 9);
b0.addEventListener('click', () => output.textContent += 0);

let pickOperator = operator => {
    a = parseInt(output.textContent);
    output.textContent = '';
    selectedOperator = operator;
};

addBtn.addEventListener('click', () => pickOperator(add));
subtractBtn.addEventListener('click', () => pickOperator(subtract));
multiplyBtn.addEventListener('click', () => pickOperator(multiply));
divideBtn.addEventListener('click', () => pickOperator(divide));

equals.addEventListener('click', () => {
    b = parseInt(output.textContent);
    output.textContent = operate(selectedOperator, a, b);
});
