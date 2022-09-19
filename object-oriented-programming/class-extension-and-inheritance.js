class ElfWrong {
  //the constructor is saved in the memory for each new elf (instance)
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  //the methods are saved only in the class and inherited as a prototype
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

// Frodo is not an elf. Should I just copy the same object and call it Hobbit?
const frodoNotHobbit = new ElfWrong("Frodo", "ring");
// console.log(frodoNotHobbit);
// Doesn't work because it doesnt inherit the prototype of Elf. I cant attack
const hobbit = { ...frodoNotHobbit };

//////////// Superclases ///////////////

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

class Hobbit extends Character {}

const frodo = new Hobbit("Frodo", "Sting");

// console.log("Real:", frodo, "Fake: ", frodoNotHobbit);

// Let's add an extra property for elves:

class Elf extends Character {
  constructor(name, weapon, type) {
    //this will call the constructor of the superclass
    super(name, weapon);
    this.type = type;
  }
}
const elrond = new Elf("Elrond", "Hadhafang", "Eldar");
// console.log(elrond, elrond.attack());

// Now I want to make an Ork
class Orc extends Character {
  constructor(name, weapon, occupation) {
    super(name, weapon);
    this.occupation = occupation;
  }
  warCry() {
    return `I am ${this.name} waaaahrghh!!!`;
  }
}

const azogTheDefiler = new Orc(
  "Azog the Defiler",
  "War Mace",
  "Ruler of the Orcs of Moria"
);
// console.log(azogTheDefiler, azogTheDefiler.attack(), azogTheDefiler.warCry());

//Understanding the prototype underneath

// console.log(Orc.prototype.isPrototypeOf(azogTheDefiler)); //true
// console.log(Character.prototype.isPrototypeOf(Orc.prototype)); //true
// console.log(azogTheDefiler instanceof Orc); //true
// console.log(azogTheDefiler instanceof Character); //true

// EXERCISE
class CharacterExercise {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
class Queen extends CharacterExercise {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.type}, now bow down to me! `;
  }
}

const victoria = new Queen("Victoria", "army", "hearts"); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

console.log(victoria.attack()); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
