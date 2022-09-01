//PRIMITIVE
const number = 5;
const boolean = true;
const string = "string";
//Undefined is the absence of definition, null is the absece of value.
const typeUndefined = undefined;
// they type of null, as a mistake, is an object!
const typeNull = null;
//symbol is used for object properties to make them unique
const symbol = Symbol("just a symbol");

//NOT PRIMITIVE
const object = {};
const objectAgain = [];
//The array type as the function type is an object. However, if I do typeof function(){} it shows function
const objectToo = function () {};

console.log(
  typeof number,
  typeof boolean,
  typeof string,
  typeof typeUndefined,
  typeof typeNull,
  typeof symbol,
  typeof object,
  typeof objectAgain,
  typeof objectToo
);

//object types: Example:
const string1 = true.toString();
//A primitive Value doesn't have a method. In the background the engine makes this:
const string2 = Boolean(true).toString();
console.log(
  "normal type: ",
  typeof string1,
  "javaScript engine: ",
  typeof string2
);

//------------------------------//

let arr = ["1", "2", "3"];
//For JS this is the same as:
let arr2 = { 0: "1", 1: "2", 2: "3" };
