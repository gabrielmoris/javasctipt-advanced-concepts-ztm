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
console.log("funcconst", funcConst()); //34

//it accepts also parameters
const funcConst2 = new Function("param", "return param * 2");
console.log("funcconst2", funcConst2(2)); //4

//Callable object!!: if I add a meythod to a function The enginr
//will make an special object

function wohoo() {
  console.log("wooooooohoooo");
}

wohoo.yell = "WOOOOOOOOHOOOOOO";

//the javaScript creates this

const specialObject = {
  yell: "WOOOOOOOOHOOOOOO",
  name: "wohoo",
  //and also adds something like this
  // ():console.log("wohooo")
};

//Funcions are first class citizens in JS
//1. can be asigned to variables and props ob objects
var variable = function () {};
//2. can be pases as arguments in another function
function one(arg1, func1) {
  func1(arg1);
}
one("I am loged!", console.log);
//3 We can return functions as a values from other functions
function b() {
  return function c() {
    console.log("returned a function here!");
  };
}

b()();
//or also:
var c = b();
c();

//careful for performance this inicialices the function each time!

for (i = 0; i <= 5; i++) {
  function f(b) {
    console.log(b);
  }
  f(i);
}
//better the function initialices before and then I call it

function g(d) {
  console.log(d);
}
for (j = 0; j <= 6; j++) {
  g(j);
}
