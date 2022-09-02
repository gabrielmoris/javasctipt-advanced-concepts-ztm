//JS engine will change automatically the type of data to compare
console.log(1 == "1"); //true
// I can avoid JS engine to do this type coercion
console.log(1 === "1"); //false

//it happens in more cases
if (1) {
  console.log("1 is true for JS engine!");
} //true
if (0) {
  console.log("this will be falsy, wont be shown");
}

//---------------OBJECT.IS---------------
//Works similar as ===, but changes in 2 cases
//In JS we have the concept of positive and negatie even with 0

console.log(-0 === +0); //true
console.log(Object.is(-0, +0)); //false

//NaN now can be compared
console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true

//________EXERCISE: guess the output_______//
console.log("\x1b[37m", "//////EXERCISE/////");
console.log(false == ""); //true
console.log(false == []); //true*
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //true*
console.log("" == {}); //false
console.log(0 == []); //true*
console.log(0 == {}); //false
console.log(0 == null); //false*
