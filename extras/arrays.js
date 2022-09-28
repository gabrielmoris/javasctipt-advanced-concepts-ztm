const array = [2, 4, 10, 16];

// forEach
const newArray = [];
const forEachArray = array.forEach((num) => {
  num * 2;
  newArray.push(num * 2);
});

console.log(forEachArray); //undefined, because forEach doesnt save the results
console.log("forEach iterates over every element of the array: ", newArray);

//map
const mapArray = array.map((num) => {
  //This method must always return something to be saved
  return num * 2;
});

console.log(
  "map changes each element of an array and stores it in the variable: ",
  mapArray
);

//filter
const filterArray = array.filter((num) => {
  //This method must always return something to be saved
  return num > 5;
});

console.log(
  "filter saves in a variable the element that fullfills the given condition (> 5): ",
  filterArray
);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
  //This method must always return something to be saved
  return accumulator * num;
}, 1000); //the last value in reduce is the value that has the accumulator at the begginning

console.log(
  "reduce saves in a variable the product of an accumulative function: ",
  reduceArray
);
