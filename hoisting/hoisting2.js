//when the global execution context starts, the javascript engine hoists both variables as undefined.

var favouriteFood = "grapes";
var foodThoughts = function () {
  //Inside this execution context Hoisting happens again, so favouriteFood is undefined again!
  console.log("Original favourite food : ", favouriteFood);

  var favouriteFood = "sushi";
  console.log("New favourite food: ", favouriteFood);
};
foodThoughts();
