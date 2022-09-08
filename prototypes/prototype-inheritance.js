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

console.log(dragon.talk());
//make lizard inherit 1 property
const talkingLizard = dragon.talk.bind(lizard);
console.log(talkingLizard());
//make lizard to inherit dragon properties and methods
console.log(dragon.isPrototypeOf(lizard));
lizard.__proto__ = dragon;
console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.talk()); //will inherit all properties from Dragon and overwrite the own properties
//Check inherited & own props
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log("Own Prop: ", prop);
  } else {
    console.log("Inherited Prop: ", prop);
  }
}
