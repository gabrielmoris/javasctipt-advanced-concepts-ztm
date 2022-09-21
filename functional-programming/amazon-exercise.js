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

function addToCartBefore(user, item) {
  item.price = item.price + (item.price * 3) / 100;
  return user.cart.push(item);
}

function emptyCartBefore(user) {
  user.cart = [];
}

function purchaseBefore(user) {
  user.purchases = user.cart;
  user.cart = [];
}

function refundBefore(user, item) {
  let arrToRepush = [];
  user.purchases.forEach((purchasedItem) => {
    if (purchasedItem.name !== item.name) {
      arrToRepush.push(purchasedItem);
    }
  });
  user.purchases = arrToRepush;
}
// addToCartBefore(user, item1);

// console.log("add item to cart", user);
// emptyCartBefore(user);
// console.log("Empty cart", user);
// addToCartBefore(user, item2);
// addToCartBefore(user, item1);
// console.log("add 2 items to cart", user);
// purchaseBefore(user);
// console.log("user purchased the items:", user);
// refundBefore(user, item1);
// console.log("user refund item1:", user);

// After I LEARNED FP
