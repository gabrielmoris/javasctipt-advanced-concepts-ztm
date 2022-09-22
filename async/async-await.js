import fetch from "node-fetch";

//It makes the code easier to read

//with promises the code looks like this:
// movePlayer(100, "left")
//   .then(() => movePlayer(300, "left"))
//   .then(() => movePlayer(233, "up"))
//   .then(() => movePlayer(98, "right"));

//With async-await (the consts are not neccesary) looks like this:
// async function playerStart() {
//   const firstMove = await movePlayer(100, "left");
//   const secondMove = await movePlayer(300, "left");
//   const thirdMove = await movePlayer(233, "up");
//   const forthMove = await movePlayer(98, "right");
// }

// (async function fetchUsers() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const parsedData = await data.json();
//   console.log(parsedData);
// })();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        return await response.json();
      })
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (e) {
    console.log("error: ", e);
  }
};
getData();
