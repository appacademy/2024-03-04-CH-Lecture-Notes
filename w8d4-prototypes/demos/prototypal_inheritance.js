// METHOD 1

function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  this.name = name;
}


// Make Cat inherit from Animal here.
// Cat.prototype = Animal.prototype; // DOES NOT WORK because animal and cat
// both have same methods defined on them now. 


Cat.prototype.meow = function () {
  console.log('Meow!');
};





// METHOD 2

function Animal(name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  // this.name = name;
  Animal.call(name)
}


// Make Cat inherit from Animal here.
// Animal might be expensive to run, so not recommended
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;


Cat.prototype.meow = function () {
  console.log('Meow!');
};



// METHOD 3

function Animal(name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  // this.name = name;
  Animal.call(name)
}


// Make Cat inherit from Animal here.
function Surrogate() {};
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;


Cat.prototype.meow = function () {
  console.log('Meow!');
};




// Method 4
/* ----- ES6 Class syntax ----- */

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + ' is eating.');
    }
}

class Cat extends Animal {
    constructor(name, coatColor) {
        super(name); // equivalent of Animal.call(this) in ES5
        this.coatColor = coatColor;
    }

    meow() {
        console.log('Meow!');
    }
}