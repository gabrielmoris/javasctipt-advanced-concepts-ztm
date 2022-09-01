const number = 5;
const boolean = true;
const string = "string";
//Undefined is the absence of definition, null is the absece of value.
const typeUndefined = undefined;
// they type of null, as a mistake, is an object!
const typeNull = null;
//symbol is used for object properties to make them unique
const symbol = Symbol("just a symbol");
const object = {};
//The array type as the function type is an object. However, if I do typeof function(){} it shows function

console.log(
  typeof number,
  typeof boolean,
  typeof string,
  typeof typeUndefined,
  typeof typeNull,
  typeof symbol,
  typeof object
);
