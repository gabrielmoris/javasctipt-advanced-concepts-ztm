//Function that takes long time
function addTo80(n) {
  console.log("Few hours later...");
  return n + 80;
}

console.log(addTo80(5)); //85
console.log(addTo80(5)); //85 again!

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    console.log("Fast because is cached!!");
    return cache[n]; // same as: cache.n
  } else {
    console.log("First time is cached");
    cache[n] = n + 80;
    return cache[n];
  }
}
// memoizedAddTo80(20);
// memoizedAddTo80(20);

//Let's improve the function avoiding the global scope.
function memoizedImproved() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fast because is cached!!");
      return cache[n]; // same as: cache.n
    } else {
      console.log("First time is cached");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedImproved();
console.log("First time 20", memoized(20));
console.log("First time 2", memoized(2));
console.log("Second time 20", memoized(20));
console.log("Second time 2", memoized(2));
