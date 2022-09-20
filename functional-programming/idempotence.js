function notGood(num) {
  return Math.random(num);
}

console.log("This gives always different output", notGood(8));

function notPureButGood(input) {
  return input;
}
console.log(
  "This gives always the same output: ",
  notPureButGood("always same")
);

//It is not only the hability to have always the same output, but the hability to even can call itself and give the same output

Math.abs(Math.abs(-23));
