// "use strict";
function weird() {
  //this variable is not declared before, but JS makes automatically the declaration unles I use "use strict"
  height = 15;
  return height;
}
console.log(weird());

//another weird behaviour is when I put a function with name inside of a var.
//It gives error if I try to declare it because only exists inside of the variable

var heyhey = function doodle() {
  return "heyhey";
};

console.log(heyhey());
// console.log(doodle());
