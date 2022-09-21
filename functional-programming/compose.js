//Compose:
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (n) => n * 3;
const makeAbsolute = (n) => Math.abs(n);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makeAbsolute);

console.log(multiplyBy3AndAbsolute(-20)); //60

//Pipe: similar to compose but the order is different.
const pipe = (f, g) => (data) => g(f(data));
