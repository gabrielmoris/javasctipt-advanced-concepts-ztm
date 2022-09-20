//no side effects
//input --> output

const array = [1, 2, 3];
function notPure(arr) {
  arr.pop();
}
//The function has side effects
// console.log("Array Before", array);
//console.log(" notPure(array)", notPure(array));
// console.log("Array After", array);

function pure(arr) {
  let newArr = [].concat(arr);
  newArr.pop();
  return newArr;
}
//The function has not side effects
// console.log("Array Before", array);
// console.log("pure(array)", pure(array));
// console.log("Array After", array);

//QUESTION

//IS this function pure??
function a() {
  console.log("a");
}
//No, it is affecting the window object
