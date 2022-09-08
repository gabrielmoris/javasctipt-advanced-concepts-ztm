const array = [1, 2, 3, 4];
//The prototype is an Array[]
console.log(array.__proto__);
//The prototype is the base Object {}
console.log(array.__proto__.__proto__);
//No more prototype (null)
console.log(array.__proto__.__proto__.__proto__);

// Functions are same /////////////////////////////

function ai() {}
console.log(ai.__proto__);
//The prototype is the base Object {}
console.log(ai.__proto__.__proto__);
