//In node.js we dont have the fetch method of the webAPI
import fetch from "node-fetch";
//Before promises the async javascript where done with callbacks

// movePlayer(100, "left", function () {
//   movePlayer(300, "left", function () {
//     movePlayer(233, "up", function () {
//       movePlayer(98, "right", function () {});
//     });
//   });
// });

//With promises, the nested code is avoided

// movePlayer(100, "left")
//   .then(() => movePlayer(300, "left"))
//   .then(() => movePlayer(233, "up"))
//   .then(() => movePlayer(98, "right"));

//How to build Promises:

const promise = new Promise((resolve, reject) => {
  let randomNum = Math.random();
  if (randomNum > 0.5) {
    resolve("It worked");
  } else {
    reject("Unfortunately didn't work");
  }
});

// promise
//   .then((result) => result + "! Wonderful!")
//   .then((result2) => console.log(result2))
//   .catch((e) => console.log(e));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "SetTimeOut 5s Resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "SetTimeOut 1s Resolved");
});

//It returns in orer, doesnt matter if goes to the web API or not
// Promise.all([promise3, promise2, promise])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => console.log("promise failed randomly:", e));

//Exercise

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => {
      return response.json();
    });
  })
)
  .then((results) => {
    console.log(results);
  })
  .catch((e) => console.log("Error fetching: ", e));
