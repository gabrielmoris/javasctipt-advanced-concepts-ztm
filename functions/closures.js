function a() {
  let grandpa = "grandpa Abe";
  return function b() {
    let father = "father Homer";
    return function c() {
      let son = "son Bart";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

// console.log(a()()());

const boo = (string) => (name) => (name2) =>
  console.log(`${string}, ${name} ${name2}`);

// boo("hi")("Saludos")("Cordiales");

const greeting = boo("hello");
const personGreeting = greeting();

//Exercise
//setTimeOut will be handled with the javaScript Runtime and the const callMe will be still Available!!
function callMeMaybe() {
  const callMe = "Hi! I am now here!";
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
}
// callMeMaybe();
//In this case the variable will be after the setTimeOut, but the callMe const is still saved because the SetTimeOut needs it!
function callMeMaybe2() {
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}
// callMeMaybe2();

//WHY USE CLOSURES
//1. Memory efficient:
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(Math.random());
  console.log("array created in heavyDuty");
  return bigArray[index];
}
// Each time I call the function the bigArray is created
// console.log(heavyDuty(656));
// console.log(heavyDuty(66));
// console.log(heavyDuty(6));
// With closure
function heavyDuty2() {
  const bigArray = new Array(7000).fill(Math.random());
  console.log("array created in heavyDuty2");
  return function (index) {
    return bigArray[index];
  };
}

// const getHeavyDuty = heavyDuty2();
// console.log(getHeavyDuty(4));
// console.log(getHeavyDuty(44));
// console.log(getHeavyDuty(454));

//2. Encapsulation:
//copyPaste in browser.
const getNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => {
    timeWithoutDestruction++;
  };
  const totalPeaceTime = () => {
    return timeWithoutDestruction;
  };
  const launch = () => {
    timeWithoutDestruction = -1;
    return "🎆";
  };
  setInterval(passTime, 1000);
  return {
    //If i dont return the launch, It wont be accessible from the outside of the fn,
    totalPeaceTime,
    // launch,
  };
};

// const ohNo = getNuclearButton();
// console.log(ohNo.totalPeaceTime());
///////////////////////////EXERCISE/////////////////////////////////
//Be able to call this function only once:
// let view;
// function initialize() {
//   view = "🎉";
//   console.log("view has been set");
// }
let view;
function initialize() {
  let called = 0;
  return () => {
    if (called <= 0) {
      view = "🎉";
      console.log("view has been set");
      called++;
    }
  };
}

//It will make the function save the called count
// const callInitialize = initialize();
// callInitialize();
// callInitialize();
// callInitialize();

///Exercise 2 // solve this unexpected output without using let
// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index " + i);
//   }, 3000);
// }
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("I am at index " + closureI);
    }, 3000);
  })(i);
}
