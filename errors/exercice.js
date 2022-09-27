(function () {
  try {
    throw new Error();
  } catch (err) {
    var err = 5;
    var boo = 10;
    console.log(err); //5
  }
  //Guess what the output is here:
  console.log(err); //undefined
  console.log(boo); //10
})();
