//strings
//.padStart() & padEnd()
console.log("Turtle".padStart(30)); //30 spaces before + string. PadEnd is the same but at end

//ending comas in args a now valid

const func = (a, b) => {
  console.log(a, b);
};

func("hi", "dude");

//Object.values,Object.entries
const obj = {
  user1: "Jorge",
  user2: "Alberto",
  user3: "Ramón",
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, ": ", obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).forEach((entry) => {
  console.log(entry);
});

//example
const example = Object.entries(obj).map((val) => {
  return val[1] + val[0].replace("user", "");
});
console.log(example);

//async awwait was a new feature of ES8
