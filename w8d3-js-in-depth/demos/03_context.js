// Ways to call a function:
//   ???

// Function Style
function functionThis() {
  console.log(this);
}

// functionThis(); // Window/Global Object

// Constructor Style
function Fish(name) {
  this.name = name;
  console.log(this);
};

// const frank = new Fish('Frank'); // Fish { name: 'Frank' }

// Method Style
Fish.prototype.thisChecker = function() {
  console.log(this);
};

// frank.thisChecker(); // Fish { name: 'Frank' }







































function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  // debugger
  console.log(`${this.name} says 'meow'`);
};

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherObject) {
  console.log(`${this.name} sniffs ${otherObject.name}`);
};

function random() {
  console.log(`${this.name} says 'meow'`);
}

























function timesDo(num, callback) {
  for (let i = 0; i < num; i++) {
    callback();
  }
}








































// Cat.prototype.sayHi = function () {
//   // debugger
//   // let that = this
//   return function (num) {
//     // debugger
//     timesDo(num, this.meow.bind(this))
//   }
// }
