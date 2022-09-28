//bigInt ---> new type
console.log(typeof 1n); //bigint
//here javascript breaks
console.log(
  Number.MAX_SAFE_INTEGER,
  "9007199254740991 + 10 = ",
  Number.MAX_SAFE_INTEGER + 10
);

//I solve it using n

console.log(
  "9007199254740991 + 10 != ",
  9007199254740991 + 10,
  "\n",
  "9007199254740991n + 10n = ",
  9007199254740991n + 10n
);

//nullish coalescing operator ??
// can be used instead of or (||) operator
let will_pokemon = {
  pikachu: {
    species: "mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: 0,
  },
};
let smith_pokemon = {
  raichu: {
    species: "mouse Pokemon",
    height: 0.8,
    weight: 8,
    power: "ray",
  },
};

let power = will_pokemon?.pikachu?.power || "no power";
let noPower = will_pokemon?.pikachu?.power ?? "no power";
console.log("will_pokemon power: ", power);
console.log("will_pokemon noPower: ", noPower);

//optional chaining operator ?

let weight = will_pokemon.pikachu.weight;
console.log("weight:", weight);
let weight2 = smith_pokemon.pikachu?.weight;
console.log("weight:", weight2); //this is undefined but doesn't throws an error

//globalThis
// globalThis works in node as well

// console.log(window); //throws an error because in node there is no windoe object
console.log("globalThis", globalThis);
