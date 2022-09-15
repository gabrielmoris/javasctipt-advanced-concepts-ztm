//THIS is the object that the function is a property of.
//Why use this:
//1: gives methods access to their object

const obj = {
  name: "Juan Francisco",
  sing() {
    return `dale a tu cuerpo alegria ${this.name}`;
  },
  singAgain() {
    return this.sing() + "!!!";
  },
};

// console.log(obj.singAgain());

//2. execute same code for multiple objects

function importantPerson() {
  console.log(this.name + "!");
}

const name = "Juan Carlos I";
const obj1 = {
  name: "Felipino",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "Jackie Chan",
  importantPerson: importantPerson,
};

// importantPerson(), obj1.importantPerson(), obj2.importantPerson();
/////////////////////////////////////////////////////////////////////////////////////////

//a and b (this) refers to the global obj, c refers tot he object where it is called (hi:)
const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
// a();
/////////////////////////////////////////////////////////////////////////////////////////

const obj3 = {
  name: "Casimiro",
  sing() {
    console.log("in sing()", this);
    //in anotherFunction(), this is not lexically scoped, it doesnt depend where it is, it depends where is called!
    //here this will refer then to the global object unless I use an arrow
    //function, bind this to it or make a reference (put it in a variable)
    var anotherFunction = function () {
      console.log("in sing.anotherFunction()", this);
    };
    return anotherFunction.bind(this);
    // anotherFunction();
  },
};

//In order to manipulate the this keyboard we can use several properties
// call()
const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};
//Calls a method of an object, substituting another object for the current object.
console.log("archer before call()", archer);
wizard.heal.call(archer, archer.health, 20);
console.log("archer after call()", archer);

//apply()
//is like call, but the arguments for the function are in an array. Calls the function, substituting the specified object
//for the this value of the function, and the specified array for the arguments of the function

console.log("archer before apply()", archer);
wizard.heal.apply(archer, [-10, -20]);
console.log("archer after apply()", archer);

//bind()
//For a given function, creates a bound function that has the same body as the original function.
//The this object of the bound function is associated with the specified object, and has the specified initial parameters.
//I need to save it in a const
console.log("archer before bind()", archer);
const healArcher = wizard.heal.bind(archer, -20, 1);
healArcher();
console.log("archer after bind()", archer);

//Exercise
//without using for loops return the biggest number
const array = [1, 2, 3];

function getMaxNumber(arr) {
  //I borrow the method from Math and I use it in the array
  // The first parameter is null or this because we don't need to pass this/who to the function
  return Math.max.apply(null | this, arr);
}

console.log("Get Max Number", getMaxNumber(array)); // should return 3

//function curryIng
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(null, 2);
let multiplyByTen = multiply.bind(this, 10);
console.log("Multiply by 2", multiplyByTwo(4));
console.log("Multiply by 10", multiplyByTen(4));

//Another Exercise
var b = {
  name: "Carlos",
  say() {
    console.log("this in b", this);
  },
};

var c = {
  name: "Carlos",
  say() {
    return function () {
      console.log("this in c", this);
    };
  },
};

var d = {
  name: "Carlos",
  say() {
    return () => console.log("this in d", this);
  },
};

// b.say();
// c.say()();
// d.say()();

//Exercise!!
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon'

//=====Ways of manipulate this keyword

// new binding this:

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const juan = new Person("Juan", 65);
console.log(juan);

// implicit binding

const person = {
  name: "Alberto",
  age: 33,
  hi() {
    console.log("Hi," * this.name);
  },
};

// Explicit binding

// const person2 = {
//   name: "Maricarmen",
//   age: 43,
//   hi: function () {
//     console.log("Hi," + this.setTimeout);
//   }.bind(window),
// };

// arrow functions (Lexical scoping)

const personArrow = {
  name: "Legolas",
  age: 43,
  hi: function () {
    var inner = () => {
      console.log("Hi ," + this.name);
    };
    return inner();
  },
};

personArrow.hi();
