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

// console.log(
//   typeof number,
//   typeof boolean,
//   typeof string,
//   typeof typeUndefined,
//   typeof typeNull,
//   typeof symbol,
//   typeof object,
//   typeof objectAgain,
//   typeof objectToo
// );

//object types: Example:
const string1 = true.toString();
//A primitive Value doesn't have a method. In the background the engine makes this:
const string2 = Boolean(true).toString();
// console.log(
//   "normal type: ",
//   typeof string1,
//   "javaScript engine: ",
//   typeof string2
// );

//------------------------------//

let arr = ["1", "2", "3"];
//For JS this is the same as:
let arr2 = { 0: "1", 1: "2", 2: "3" };

//-----------pass by reference vs pass by value------------------//
//this is deleted and overwritten
let val = 5;
val = 4;
//val2 copies the value of val an put it in a new memory space without any connection (pass by value)
let val2 = val;

let obj1 = { name: "Jing", password: "123456" };
let obj2 = obj1;
//This happens because objects passby reference. I change both passwords because they are the same obj stiredin the memory heap
obj2.password = "easypeasy";
// console.log("obj1= ", obj1, "obj2= ", obj2);
//arrays are objects too
let a = [1, 2, 3];
let b = a;
b.push(1);
// console.log("b=> ", b, "a=> ", a);
//we have the option ofcopying the object
let d = [].concat(a);
d.push(12);
// console.log("d=> ", d, "a=> ", a);
let obj3 = { ...obj1 };
let obj4 = Object.assign({}, obj1);
obj3.password = "cucurucho";
obj4.password = "Xie";
// console.log("obj3= ", obj3, "obj4= ", obj4, "obj1= ", obj1);

//Nested objects only clones the first level. The nested objects are still passed by reference

let nested1 = { a: "a", b: "b", c: { deep: true } };
let nested2 = { ...nested1 };
let nested3 = Object.assign({}, nested1);
//I would have to do:
let nested4 = { ...nested1, c: { ...nested1.c } };
//Or very interesting, but this has performance implications:
let nested5 = JSON.parse(JSON.stringify(nested1));
nested1.c.deep = "wow!";

// console.log(
//   "nested3= ",
//   nested3,
//   "nested2= ",
//   nested2,
//   "nested4= ",
//   nested4,
//   "nested5= ",
//   nested5,
//   "nested1= ",
//   nested1
// );

//___________EXERCISE: compare objects___________//

var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2;
console.log(eq); // gives false
