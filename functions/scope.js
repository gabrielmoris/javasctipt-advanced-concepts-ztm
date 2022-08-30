function sayMyName() {
  var a = "a";
  //ERROR: because b,c doesnt exist in this scope
  //   console.log("SAYNAME", b, c, a);
  return function findName() {
    var b = "b";
    //ERROR: because b doesnt exist in this scope
    // console.log("FINDNAME", b, c, a);
    return function printName() {
      var c = "c";
      console.log("PRINTNAME", b, c, a);
      return "Gabriel C Moris";
    };
  };
}

//Then I will call the 3rd nested function
// console.log(sayMyName()()());

//Global scope (var)
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i);
}
loop();

//Block scope (let)
function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //ReferenceError: i is not defined
  // console.log("final", i);
}
loop2();
