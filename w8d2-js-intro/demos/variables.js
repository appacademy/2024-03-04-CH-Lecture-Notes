/* const */

// 1. can be declared and assigned ONLY once
//      aka it must be initialized at time of declaration
// 2. it is block scoped (scope?)

// Scope: "The scope of a variable is the region of a program where it can be accessed."

// const fruit = 'banana';
// fruit = 'notbanana';
// console.log(fruit);


// const fruits = ['banana'];
// fruits.push("notbanana");
// console.log(fruits);

























function scopeExample() {
  // SCOPE A; variables: x
  const x = "x";

  // the code block is denoted by { and }
  // this is what the "block" in "block scoped" refers to
  if (true) {
    // SCOPE B; variables: x, y
    const y = "y";

    // You can also make a code block by just inserting { and }
    {
      // SCOPE C; variables: x, y, and z
      const z = "z";
      console.log(x, y, z);
    }
  }
  // console.log(z); //??
}

// In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"

// scopeExample();












/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped (scope?)
// 3. use const when possible

// What will happen here?
function howToConst() {
  const username = 'Harold';

  if (true) {
    const username = 'Url';

    console.log(username);  // 'Url'
  }

  console.log(username);  // 'Harold'
}

// howToConst();



















// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    console.log(username); // 'Harold'
  }

  console.log(username);  // 'Harold'
}

// howToConst2();
















// What about here?
function howToConst3() {
  if (true) {
    const username = 'Harold';
    console.log(username);
  }

  console.log(username);
}
// howToConst3();




















/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret); // "I'm secretly a banana"
  }

  console.log(secret); // "I'm secretly a banana"
}

// howToLet();


















// What about here?
function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    // let secret = "Nope, definitely a cat.";
    secret = "I'm secretly a banana";
    console.log(secret);

  }

  console.log(secret);
}

// howToLet2();




























/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Harold';

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}

// howToVar();














// What about here?
function howToVar2() {

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}
howToVar2()



