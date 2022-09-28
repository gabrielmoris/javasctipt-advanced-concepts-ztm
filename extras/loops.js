const basket = ["apples", "grapes", "oranges", "peas"];

//for
for (let i = 0; i < basket.length; i++) {
  console.log("for: ", basket[i]);
}

//forEach

basket.forEach((fruit) => {
  console.log("forEach: ", fruit);
});

//do
let i = 0;
do {
  console.log("do: ", basket[i]);
  i++;
} while (i < basket.length);

//while
let j = 0;
while (j < basket.length) {
  console.log("while: ", basket[j]);
  j++;
}

//for of

for (fruit of basket) {
  console.log("for of:", fruit);
}

//for in (for objects) enumerate
const basketToEnumerate = {
  apples: 4,
  grapes: 34,
  oranges: 20,
  peas: 3,
};

for (fruit in basketToEnumerate) {
  console.log("for in: ", fruit);
}
