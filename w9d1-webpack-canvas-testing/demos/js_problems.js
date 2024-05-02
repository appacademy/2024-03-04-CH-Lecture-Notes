// Surrogate Pattern
Function.prototype.inherits = function (Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// -------------------------------------------------------

// myBind
Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;

  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };

};

const sayHello = function (arg1, arg2) {
  return `${this} says hello to ${arg1} and ${arg2}`;
};

const boundSayHello = sayHello.myBind("Taylor", "Raz")
console.log(boundSayHello("Cathy"))

// -------------------------------------------------------

// myCurry
Function.prototype.myCurry = function (numArgs) {

  let nums = [];
  let that = this;
  return function _myCurry(el) {
    nums.push(el);

    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return that(...nums);
      // return fcn.apply(null, nums);
      // return fcn.call(null, ...nums);
    }
  };
};

const sum = function () {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum += num;
  }

  return sum;
};

const curriedSum = sum.myCurry(3)
curriedSum(1)
curriedSum(4)
curriedSum(5);

// curriedSum(1)(4)(5);

// -------------------------------------------------------

// myApply
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context)(...args);
};

// myCall
Function.prototype.myCall = function (context, ...args) {
  return this.bind(context)(...args);
};