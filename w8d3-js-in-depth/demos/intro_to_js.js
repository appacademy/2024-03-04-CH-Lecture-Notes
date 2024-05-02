Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
};

[1, 2, 3].myEach(function(ele) {
  console.log(`the square of ${ele} is ${ele * ele}`)
})

Array.prototype.myMap = function (callback) {
  let mappedArray = []

  this.myEach(function(ele) {
    mappedArray.push(callback(ele))
  });

  return mappedArray;
};

[1, 2, 3].myMap(function(ele) {
  ele * ele
})