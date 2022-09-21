//High order Function: Has another function as an argument or returns a function
const hof = () => () => 5;
console.log("//=> returns a function", hof(), hof()()); //=> returns a function
const hof2 = (fn) => fn(5);
hof2(console.log); //returns the console log of 5

//Closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = closure();
//Each time the number will be added and it is still in memory
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
