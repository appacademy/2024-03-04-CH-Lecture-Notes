/* Function Demo */


/* Named functions */

console.log(square(10)); 

function square(num) {
  // debugger; // this = window
  return num * num;
}









/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + ' !';
};

// console.log(feedMe("banana"));






/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return 'Thanks for the ' + food + ' !';
};

console.log(feedMe2("apple"));


// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

const arrow = (arrowArg1, arrowArg2) => {
  // function body
};















/* Constructor functions */

// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!
function User(username, age) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the user object we are creating
  // what is this?
  debugger;
  this.username = username;
  this.age = age;
  // this.greet = function() {  //BAD
  //   console.log("hello");
  // }
}

User.prototype.greet = function() {
  debugger;
  console.log("hello");
}

// What about "instance" methods?
// const amin = new User('amin', 10);
// amin.greet();