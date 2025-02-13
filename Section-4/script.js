'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with with ${ing1}, ${ing2}, ${ing3} `
    );
  },
  orderPizza: function (mainingredient, ...otherIngredients) {
    console.log(mainingredient);
    console.log(otherIngredients);
  },
};

//lecture 2
/*
restaurant.orderDelivery({
  mainIndex: 2,
  time: '22:30',
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 32, c: 212 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/////////////////////////////////////////////////////////////////////////////
//lecture 1 after lecture 2
/*
const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;
// // console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

//lecture 3
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables are arrays, strings, maps and sets. Not Objects

const str = 'Avi';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt(`Let\s make pasta!
//   Ingredient 1?`),
//   prompt(`
//     Ingredient 2?`),
//   prompt(`
//       Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// lecture 3

/*

//Spred operator is used on right hand side of assignment operator

const arr = [1, 2, ...[3, 4]];

//Rest op because its in the right side of the assignment operator

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 6, 4, 3);
add(5, 6, 4, 3, 2, 3);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');

restaurant.orderPizza('Mushrooms');
*/

//lecture 5
/*
//Any data type, return any data type, short circuiting
console.log('-----------OR-----------');
console.log(3 || 'Avi');
console.log('' || 'Avi');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || ' ' || 'Hello' || null);
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('-----AND------');

console.log(0 && 'Avi');
console.log(7 && 'Avi');

console.log('Hello' && 23 && null && 'Avi');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
*/
// lecture 6
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish : null and undefined (Not 0 or "") 
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

//lecture 7
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<Anonymos>';

// rest2.owner = rest2.owner && '<Anonymos>';

rest1.owner &&= '<Anonymos>';
rest2.owner &&= '<Anonymos>';

console.log(rest1);
console.log(rest2);
*/


// lecture 6
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish : null and undefined (Not 0 or "") 
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

//lecture 7
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<Anonymos>';

// rest2.owner = rest2.owner && '<Anonymos>';

rest1.owner &&= '<Anonymos>';
rest2.owner &&= '<Anonymos>';

console.log(rest1);
console.log(rest2);
*/
//lecture 8
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

//lecture 9
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//With optional chain
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//ex

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  // console.log(day);
  restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

console.log(restaurant.);
*/

//lecture 9
/*
//Properties name
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day} ,`;
}
console.log(openStr);

//Properties values

const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key,{open,close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

// lecture 10
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection:', commonFoods);

console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/

//Lecture 11

// const rest = new Map();
// rest.set('name', 'Mahesh');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Sitapur,India'));

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// console.log(rest.size);

// const question = new Map([
//   ['question', 'What is th best programming languag ein the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);
// console.log(question);

// //Convert object to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);


