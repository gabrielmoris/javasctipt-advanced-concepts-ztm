// const array = [1, 2, 3, 4];
// //The prototype is an Array[]
// console.log(array.__proto__);
// //The prototype is the base Object {}
// console.log(array.__proto__.__proto__);
// //No more prototype (null)
// console.log(array.__proto__.__proto__.__proto__);

// // Functions are same /////////////////////////////

// function ai() {}
// console.log(ai.__proto__);
// //The prototype is the base Object {}
// console.log(ai.__proto__.__proto__);

let dragon = {
  name: "Dvalin",
  fire: true,
  fight() {
    return 5;
  },
  talk() {
    return `I am ${this.name}, ${
      this.fire ? "the breather of fire." : "nice to meet you."
    }`;
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// console.log(dragon.talk());
//make lizard inherit 1 property
// const talkingLizard = dragon.talk.bind(lizard);
// console.log(talkingLizard());
//make lizard to inherit dragon properties and methods
// console.log(dragon.isPrototypeOf(lizard));
// lizard.__proto__ = dragon; //This is a bad practice because affects to the performance of the JS compiler, but It works
// console.log(dragon.isPrototypeOf(lizard));
// console.log(lizard.talk()); //will inherit all properties from Dragon and overwrite the own properties
//Check inherited & own props
// for (let prop in lizard) {
//   if (lizard.hasOwnProperty(prop)) {
//     console.log("Own Prop: ", prop);
//   } else {
//     console.log("Inherited Prop: ", prop);
//   }
// }

// The interesting think is that we can make objects that points to the same space in memory

/////////////////////
//With functions there are some properties
function aia() {}
// console.log(aia.hasOwnProperty("name"));
// console.log(aia.hasOwnProperty("bind")); //Thi is false because the prototype comes from the "parent"

//instead of using __proto__
let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 48;
// console.log("Is socrates mortal?", socrates.mortal);
//////////////////////////////////////////////////////////////
//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// new Date("1900-10-10").lastYear();
//'1899'

Date.prototype.lastYear = function () {
  const year = this.getFullYear() - 1;
  return year;
};

console.log(new Date("1900-10-10").lastYear());

//#Bonus
// Mofify .map() to print '????' at the end of each item.
// console.log([1, 2, 3].map());
//1????, 2????, 3????

Array.prototype.map = function () {
  maped = [];
  this.forEach((item) => {
    const mapedITem = `${item.toString()} ????`;
    maped.push(mapedITem);
  });
  return maped;
};
console.log([1, 2, 3].map());

//Create my own bind property
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
