/*------------------------------------------*/
const greet = (count) => {
    for (let i = 0; i < count; i++) console.log("Hello World");
};

greet(3);

/*------------------------------------------*/
const square = (num) => {
    return num * num;
};

console.log(square(3));

/*------------------------------------------*/


const calculate = (a, b, operation) => {
    return operation(a, b);
};


const addition = calculate(10, 5, function (num1, num2) {
    return num1 + num2;
});

console.log(addition);

/*------------------------------------------*/

const subtraction = (a, b) => a - b;

const subResult = calculate(20, 10, subtraction);

console.log(subResult);

/*------------------------------------------*/

function multiply(a, b) {
    return a * b;
}

const mulResult = calculate(5, 10, multiply);
console.log(mulResult);

/*------------------------------------------*/
const a = [10, 20, 30, -40, -50, 100];


const firstNeg = (num) => {
    return num < 0;
};
const result_num = a.find(firstNeg);
console.log(result_num);
/*------------------------------------------*/
const result = a.findIndex(firstNeg);
console.log(result);
/*------------------------------------------*/
const Num = [10, 20, 30, -40, -50, 100];

Num.forEach((num, i) => {
    console.log("Array Num", num, " And Index", i);
});
