"use strict";

// const { appendMutableCookies } = require("next/dist/server/web/spec-extension/adapters/request-cookies");

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("I can drive::");
console.log(us)
*/
/*console.log('js')

function logger() {
  console.log("My name is Avi");
}
let us = 'js';

//Calling, running, invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  // console.log(apples,oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
// console.log( fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice);

*/

/*
//func declaration\

const age1 = calcAge1(2005);
console.log(age1);

function calcAge1(birthYear){
  return 2037 - birthYear;
}

//func expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(2005);
console.log(age1, age2);

*/

/*
//Arrow function

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(2005)
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(2006,'bob'));
console.log(yearsUntilRetirement(2005, 'Avi'));
*/

// function cutFruitPieces(fruit){
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges){
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//   return juice;
// }

// console.log(fruitProcessor(2,3));
/*
const calcAge = function(birthYear){
  return  2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear,firstName){
  const age = calcAge(birthYear)
  const retirement = 65 - age;

  if(retirement> 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement
  }else{
    console.log(`${firstName} has already retired`)

    return -1
  }
   

  // return retirement;
  // return `${firstName} retires in ${retirement}`
}
console.log(yearsUntilRetirement(2005,'Avi'));
console.log(yearsUntilRetirement(1950,'Mike'));
*/
/*
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} VS ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} VS ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
const friend1 = "Avi";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Avi", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991,1984,2008,2005);

// console.log(years[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['bob', 'alice'];
const firstName= 'Avi'
const avi = [firstName, 'Shukla', 2037-2005, 'programmer', friends];
console.log(avi);


const calcAge = function(birthYear){
  return  2037 - birthYear;
}
const years = [1990,2005,2018,2000];

const ag1 =calcAge(years[0]);
const ag2 =calcAge(years[1]);
const ag3 =calcAge(years[years.length-1]);
console.log(ag1,ag2,ag3);
const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
console.log(ages);
*/
/*
const friends = ["Avi", "Steven", "Peter"];
const newLength = friends.push('Jay'); //returns length of the new array
console.log(friends);
console.log(newLength);

//unshift add 1st element to array
friends.unshift('John');
console.log(friends);

//remove element
friends.pop(); //remove the last element
console.log(friends);

const popped = friends.pop();//stores the last element
console.log(friends);
console.log(popped);


friends.shift(); //stores and removes the first element
console.log(friends);


console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('SteveQ'));

if(friends.includes('Steven')){
  console.log(` You have a friend named Steven`);
}
*/

/*const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
};

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const totals = [
  bills[0] + tips[0],
  bills[1] +tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(tips);
console.log(totals);
*/
/*
const avi = {
  firstName: "Avi",
  lastName: "Shukla",
  age: 2037 - 2005,
  job: "Programmer",
  friends: ["Avi", "Steven", "Peter"],
};
console.log(avi);

console.log(avi.lastName);
console.log(avi["firstName"]);

const nameKey = "Name";
console.log(avi["first" + nameKey]);
console.log(avi["last" + nameKey]);

// console.log(avi.'last' +nameKey);

// const interestedIn = prompt("What do you want to know about Avi? Choose");

// if (avi[interestedIn]) {
//   console.log(avi[interestedIn]);
// } else {
//   console.log("Wrong request, Try again.");
// }
avi.location = "India";
avi["Twitter"] = "@CircuitSage";
console.log(avi);

console.log(`${avi.firstName} has ${avi.friends.length} friends, and his best friend is ${avi.friends[1]}`);
*/
/*
const avi = {
  firstName: "Avi",
  lastName: "Shukla",
  birthYear: 2005,
  job: "Programmer",
  friends: ["Avi", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// console.log(avi.calcAge());/
// console.log(avi.age);
// console.log(avi.age);
// console.log(avi.age);
// console.log(avi['calcAge'](2005));

console.log(avi.getSummary());
*/
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcAge: function(){
    return this.mass/(this.height*this.height)
  },
  bmi: this.calcAge
}
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcAge: function(){
    return this.mass/(this.height*this.height)
  },
  bmi: this.calcAge
}

if(mark.bmi()>john.bmi()){
  console.log(`${mark.fullName}s BMI(${mark.bmi} is higher than ${john.fullName}s ${john.bmi}`)
}else{
  console.log(`${john.fullName}s BMI (${john.bmi} is higher than ${mark.fullName}s ${mark.bmi})`);
}