//.flat()
const array = [
  1,
  [2, 3],
  4,
  [
    [5, 6],
    [[7, 8], 9],
  ],
  10,
];
console.log(array.flat()); //also accepts how many layers needs to flat: def = 1
console.log(array.flat(100));

//also cleans empty data!

const messArr = ["Marcos", "Juan", , , , , , , , "Francisco"];
console.log(messArr, messArr.flat(90));

//flatMap()

const arrayChaos = array.flatMap((item) => item + "😁");
console.log("arrayChaos ", arrayChaos);

//trim(), trimStart(), trimEnd()
const user = "                  saludos               ";
let trimstart = user.trimStart();
let trimend = user.trimEnd();
let trimall = user.trim();
console.log("trimstart: |", trimstart, "|");
console.log("trimend: |", trimend, "|");
console.log("trim: |", trimall, "|");

//fromEntries

const wrongUserProfiles = [
  ["commanderTom", 23],
  ["derek72", 44],
  ["Marcus", 23],
];

console.log(Object.fromEntries(wrongUserProfiles));

//try-catch now works without error
try {
  fakeVar;
} catch {
  console.log("this works without catch(error), only with catch");
}
