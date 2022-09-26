//CallBack queue - Task Queue

setTimeout(() => {
  console.log("1", " This is the loneliest number");
}, 0);

setTimeout(() => {
  console.log("2", "Can be as bad as one");
}, 10);

//2 Job Queue - MicroTask Queue (This is checked before Callback Queue)

Promise.resolve("hi").then((data) => console.log("2.5", data));

//3 From the engine

console.log("3", "it is a crowd");

//OUTPUT
//3 it is a crowd
//2.5 hi
//1 This is the loneliest number
//2 Can be as bad as one
