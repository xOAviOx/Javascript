'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1
  // price = price || 199
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 300);
createBooking('LH123', 5);
createBooking('LH123', undefined,5);

*/
/*
const flight = 'LH234';
const avi = {
  name: 'Avi Shukla',
  passport: 232454432,
};
const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `MR. +` + passenger.name;

  if (passenger.passport === 232454432) {
    alert('Check In!');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, avi);
console.log(flight);
console.log(avi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(avi);
checkIn(flight, avi);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('Hii');
};
document.body.addEventListener('click', high5);
['Avi', 'Martha', 'Adam'].forEach(high5);
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');

greeterHey('Avi');
greeterHey('Steven');

greet('Hello')('Avi');

const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`);

greet1('Yo')('Avi');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Avi Shukla');
lufthansa.book(453, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah WIlliam'); //Doesnt wokrk

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

//Apply Method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Avi Shukla');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 23);
 */

// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();

// //IIFE
// (function () {
//   console.log('this will never run again');
// })();

// (() => console.log('this will never run again'))();

// {
//   var isPrivate = 23;
// }
// console.log(isPrivate);
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount + ' Passengers');
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker)
*/

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   console.log(b * 2);
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // Re assigning f function

// h();
// f();
// console.dir(f);

// const boardPassengers =  function(n, wait){
//   const perGroup= n/3;
//   setTimeout(function(){}, 1000)
//   console.log(`Will start boarding in ${wait}`);
// }
