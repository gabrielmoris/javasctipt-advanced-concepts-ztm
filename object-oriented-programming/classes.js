//ES6 Classes
class Elf {
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
const elron = new Elf("Elron", "magic");
console.log(elron instanceof Elf); //true
console.log(elron.attack());
