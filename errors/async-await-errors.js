async function asyncErrHandler() {
  try {
    await Promise.reject("oops!");
  } catch (e) {
    console.log(e);
  }
  console.log("I will still be here");
}
asyncErrHandler();
