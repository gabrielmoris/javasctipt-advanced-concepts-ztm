function fail() {
  try {
    console.log("This is going to run until throw statement");
    throw new Error("FAIL!");
    console.log("This is not going to run after throw statement");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("This always will be shown!");
  }
  console.log("But this will be shown as well!!");
}
fail();

//Before this block of code would be problematic and never throw the error, but now it does :)
// try {
//   setTimeout(function () {
//     fakevariable;
//   }, 1000);
// } catch (error) {
//   console.log(error.message);
// }
