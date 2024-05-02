function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// currying saves arguments and invokes function when args have been collected
function addThreeNumbers(firstNum) {
    return function (secondNum) {
        return function (thirdNum) {
            return firstNum + secondNum + thirdNum;
        };
    };
}

const addThreeNumbersAgain = num1 => {
    return num2 => {
        return num3 => {
            return num1 + num2 + num3;
        };
    };
};

function continuousAdd() {
    const args = [];
    return function _curriedAdd(num) {
        args.push(num);
        console.log(args.reduce((acc, el) => {
            return acc + el;
        }));
        return _curriedAdd;
    };
} 