function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
}

const addThreeNumbersAgain = num1 => {
  return num2 => {
    return num3 => {
      return num1 + num2 + num3;
    }
  }
}

const addThreeNumbersAgainAgain = num1 => num2 => num3 => num1 + num2 + num3;




function continuousAdd() {
  const args = [];

  return function _curriedAdd(num) {
    args.push(num);
    // console.log(args.reduce((acc, el) => acc + el));  // calculates sum of array
    console.log(sumArray(args));
    return _curriedAdd;
  }
}


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i  < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}