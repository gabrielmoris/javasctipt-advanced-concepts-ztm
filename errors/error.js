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

// console.log(createError().stack);

//error constructors
const syntax = new SyntaxError();
const reference = new ReferenceError();

//This error is a class and can be exended

class AutenthicationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
  }
}

// throw new AutenthicationError("Error authenticating");

//Why is this useful? Avoid giving too much error information to the user
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
    this.stack = "In Database.";
    this.message = "Just an error";
  }
}

throw new DatabaseError("Error here!");
