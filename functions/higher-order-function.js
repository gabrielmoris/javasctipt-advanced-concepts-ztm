// NOT DRY code
function letJuanLogin() {
  let arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i);
  }
  return "Access Granted to Juan";
}
function letMariaLogin() {
  let arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i);
  }
  return "Access Granted to Maria";
}

// console.log(letJuanLogin(), letMariaLogin());

//We can Add parameters
function letUserLogin(user) {
  let arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i);
  }
  return `Access Granted to ${user}`;
}

// console.log(letUserLogin("Mariano"));

//Make the function even cleaner
const giveAccessTo = (user) => "Acces Granted to " + user;

// console.log(giveAccessTo("Julia"));

//In case we want to use a High Order Funcion (HOF)

function authenticate(verify) {
  //this simulates a hard task that takes time as authentication
  let arr = [];
  for (let i = 0; i < verify; i++) {
    arr.push(i);
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    fn(500000);
  } else if (person.level === "user") {
    fn(100000);
  }

  return giveAccessTo(person.name);
}

// console.log(letPerson({ level: "user", name: "Jaime" }, authenticate));
// console.log(letPerson({ level: "admin", name: "Jorge" }, authenticate));

//Exercise multiplyBy as a HOF

// const multiplyBy = (num1) => {
//   return function (num2) {
//     return num1 * num2;
//   };
// };

//as an arrow function (sooo clean)

const multiplyBy = (num1) => (num2) => num1 * num2;
const multiplyByTwo = multiplyBy(2);

console.log(multiplyByTwo(8));
