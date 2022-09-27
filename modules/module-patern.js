//USING IIFE
var fightModule = (function () {
  var harry = "potter";
  var voldemort = "He who must not be named";
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  return {
    fight: fight,
  };
})();

// console.log(fightModule.fight("ron", "hagrid"));

//commonJS
var module1 = require("./common");
console.log(module1.fight("ron", "hagrid"));

// //AMD (Asynchronous module definition)
// define(["module1"], function (module1import) {
//   var fight = module1import.fight;
//   //Ican put in my ofn funcitons and return them
//   function dance() {}
//   return {
//     dance: dance,
//   };
// });

//ES6 module
// import fight2 from "./es6/es6.js";
// fight2("pikachu", "psyduck");
//in folder es6
