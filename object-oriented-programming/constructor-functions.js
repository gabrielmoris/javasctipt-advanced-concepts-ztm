function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

const eldellbus = new Elf("eldelbus", "embrague");

// With the Function constructor
const Elf2 = new Function(
  "name",
  "weapon",
  `this.name = name ; 
  this.weapon = weapon`
);
console.log("Before I add attack", Elf2.prototype);
// In this case, using arrow function wont work because are lexically scoped
Elf2.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`;
}; // this will be stored in prototype instead of each new elf, which saves memory!
console.log("After I add attack", Elf2.prototype);

Elf2.prototype.build = function () {
  //this step is important because the scope of the second function is different as the first!
  const self = this;
  function building() {
    return `${self.name} builds a fort`;
  }
  return building();
};

const legos = new Elf2("Lego", "Lego piece");
// console.log(legos.attack());
// console.log(legos.build());
