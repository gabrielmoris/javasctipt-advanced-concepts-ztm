//Constructor
// console.log(Error);

const oops = new Error("Oops");
// console.log(oops);

//throw, will stop the code unless we handle it (for example: try, catch)
// throw new Error("errorcito");

// console.log(oops.stack); //shows the trace of the error

//for exanple

function createError() {
  const error = new Error("I am an error.");
  return error;
}

console.log(createError().stack);

//error constructors
const syntax = new SyntaxError();
const reference = new ReferenceError();
