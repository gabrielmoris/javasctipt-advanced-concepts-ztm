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
console.log(frodoNotHobbit);
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

console.log("Real:", frodo, "Fake: ", frodoNotHobbit);

// Let's add an extra property for elves:

class Elf extends Character {
  constructor(name, weapon, type) {
    //this will call the constructor of the superclass
    super(name, weapon);
    this.type = type;
  }
}
const elrond = new Elf("Elrond", "Hadhafang", "Eldar");
console.log(elrond, elrond.attack());

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
console.log(azogTheDefiler, azogTheDefiler.attack(), azogTheDefiler.warCry());
