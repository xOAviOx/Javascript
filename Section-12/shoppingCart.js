//Exporting module
console.log('Exporting module');

// //Blocking code

// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');
const shippingCost = 10;
const cart = [];

export const addToCart = function (prod, quant) {
  cart.push({ prod, quant });
  console.log(`${quant} ${prod} added to cart`);
};

const totalPrice = 237;
const totalQuant = 23;
export { totalPrice, totalQuant as tq };

export default function (prod, quant) {
  cart.push({ prod, quant });
  console.log(`${quant} ${prod} added to cart`);
}
