//functions declarations are saved complete. In global scope bigBrother is saved with both littleBrother
//inside this execution context, the second littleBrother overwrites the first one even after the return.

function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is? no me!
console.log(bigBrother());
