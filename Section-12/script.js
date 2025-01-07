//Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('bread', 5);

// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';

add('bread', 2);
add('bread', 2);
add('bread', 2);
add('bread', 2);
// console.log(cart);

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);

// console.log('something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/*
const shoppingCart2 = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 237;
  const totalQuant = 23;

  const addToCart = function (prod, quant) {
    cart.push({ prod, quant });
    console.log(`${quant} ${prod} added to cart`);
  };

  const orderStock = function (prod, quant) {
    console.log(`${quant} ${prod} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuant,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);

console.log(shoppingCart2);
*/

//Export

// export.addToCart  = function (prod, quant) {
//   cart.push({ prod, quant });
//   console.log(`${quant} ${prod} added to cart`);
// };

//Import

// const {
//   addToCart
// } = require('./shoppingCart');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quan: 5 },
    { product: 'pizza', quan: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const avi = new Person('avi');

console.log('Avi' ?? null);

console.log(cart.find(el => el.quant >= 2));

import 'core-js/actual';

//Pollyfilling async func
import 'regenerator-runtime/runtime';
