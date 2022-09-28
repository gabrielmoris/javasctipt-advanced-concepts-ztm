//In ES6 we have the opportunity to use dynamic key values in objects

const name = "flor";

const person = {
  [name]: "Margarita",
  [2 + 1]: "3",
};

console.log(person);
