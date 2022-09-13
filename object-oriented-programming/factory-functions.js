// If I want to do a set of elves, I would have to copy this object and change the methods, state for each one
const elf = {
  // This is state (data)
  name: "Legolas",
  weapon: "bow",
  // This is methods (functions)
  attack() {
    return "attack with " + elf.weapon;
  },
};

// The solution is:
// Factory functions
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return "attack with " + weapon;
    },
  };
}
const eldelbar = createElf("Eldelbar", "bier");
// console.log(eldelbar.attack());
// But still Factory functions have a memory problem. The attack function of every new elf will be
//stored in different place in memory for each one. I could put the function outside and add the prop afterwards.
// There is a better solution:  Object.create()
const elfFunctionsStore = {
  attack() {
    return "attack with " + this.weapon;
  },
};
function objCreateElf(name, weapon) {
  let newElf = Object.create(elfFunctionsStore); //this will link the attack function via __proto__
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const elron = objCreateElf("Elron", "magic");
// console.log(elron.attack());
