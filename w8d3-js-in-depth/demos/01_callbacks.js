// Callbacks are functions which are passed UNINVOKED as an argument to another function.
// "callback" refers to how we USE a function, not how it behaves or how it's defined

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function calculator(operationCallback, num1, num2) {
    return operationCallback(num1, num2);
}

function sumTwoOperations(callback1, callback2, num1, num2) {
    let result1 = callback1(num1, num2);
    let result2 = callback2(num1, num2);
    return result1 + result2;
}

