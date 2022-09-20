//Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

//Implement a cart feature:
//1. Add items to cart.
//2. Add 3% tax to item in cart
//3. Buy item: cart --> purchases
//4. Empty cart

//Bonus::
//Accept refunds
//Track user history

// BEFORE I LEARNED FP
item1 = {
  name: "item1",
  price: 23,
};
item2 = {
  name: "item2",
  price: 23,
};

function addToCart(user, item) {
  item.price = item.price + (item.price * 3) / 100;
  return user.cart.push(item);
}

function emptyCart(user) {
  user.cart = [];
}

function purchase(user) {
  user.purchases = user.cart;
  user.cart = [];
}

function refund(user, item) {
  let arrToRepush = [];
  user.purchases.forEach((purchasedItem) => {
    if (purchasedItem.name !== item.name) {
      arrToRepush.push(purchasedItem);
    }
  });
  user.purchases = arrToRepush;
}
addToCart(user, item1);

// console.log("add item to cart", user);
// emptyCart(user);
// console.log("Empty cart", user);
// addToCart(user, item2);
// addToCart(user, item1);
// console.log("add 2 items to cart", user);
// purchase(user);
// console.log("user purchased the items:", user);
// refund(user, item1);
// console.log("user refund item1:", user);
