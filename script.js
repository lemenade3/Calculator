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
let ce = document.querySelector('#back');
let c = document.querySelector('#clear');
let decimal = document.querySelector('#decimal');


let selectedOperator = add;
let a = 0;
let b = 0;
output.textContent = 0;
let nums = [];

b1.addEventListener('click', () => {
    nums.push(1)
    output.textContent = nums.join('')
});
b2.addEventListener('click', () => {
    nums.push(2)
    output.textContent = nums.join('')
});
b3.addEventListener('click', () => {
    nums.push(3)
    output.textContent = nums.join('')
});
b4.addEventListener('click', () => {
    nums.push(4)
    output.textContent = nums.join('')
});
b5.addEventListener('click', () => {
    nums.push(5)
    output.textContent = nums.join('')
});
b6.addEventListener('click', () => {
    nums.push(6)
    output.textContent = nums.join('')
});
b7.addEventListener('click', () => {
    nums.push(7)
    output.textContent = nums.join('')
});
b8.addEventListener('click', () => {
    nums.push(8)
    output.textContent = nums.join('')
});
b9.addEventListener('click', () => {
    nums.push(9)
    output.textContent = nums.join('')
});
b0.addEventListener('click', () => {
    nums.push(0)
    output.textContent = nums.join('')
});

let pickOperator = operator => {
    a = operate(selectedOperator, a, parseFloat(nums.join('')));
    output.textContent  = Math.round(a * 10000000000) / 10000000000;
    nums = [];
    selectedOperator = operator;
    
};

addBtn.addEventListener('click', () => pickOperator(add));
subtractBtn.addEventListener('click', () => pickOperator(subtract));
multiplyBtn.addEventListener('click', () => pickOperator(multiply));
divideBtn.addEventListener('click', () => pickOperator(divide));

ce.addEventListener('click', () => {
    nums.pop();
    output.textContent = nums.join('')
})

c.addEventListener('click', () => {
    selectedOperator = add;
    a = 0;
    b = 0;
    output.textContent = 0;
    nums = [];
});

equals.addEventListener('click', () => {
    b = parseFloat(nums.join(''));
    output.textContent = Math.round(operate(selectedOperator, a, b) * 10000000000) / 10000000000;
});

let dp = 0;

decimal.addEventListener('click', () => {
    if (dp != 0) {
        nums.push('.')
        output.textContent = nums.join('')
        dp++;
    };
});