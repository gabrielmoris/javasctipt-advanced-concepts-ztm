//function Expression
var canada = function () {
  console.log("cold");
};
//function Declaration
function india() {
  //this will be the empty object because there are nor arguments
  console.log(arguments);
  console.log("warm");
}

//arguments: is not good to use this keyword because it makes the javaScript engine slower
function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}
//much better to use ...spread operator

function marry2(...args) {
  console.log("arguments", args);
  return `${args[0]} is now married to ${args[1]}`;
}
console.log(marry("Tim", "Tina"));
console.log(marry2("Pepe", "Maruja"));

//function constructor

const funcConst = new Function("return 34");
console.log("funcconst", funcConst());
