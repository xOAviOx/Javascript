//Variable name coventions

// const { formatRevalidate } = require("next/dist/server/lib/revalidate");

/* 
This is 
a comment
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 22);
// console.log(typeof 'Avi');


javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
console.log(year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

*/
/*
let age = 17;
age = 20;

const birthYear = 2007;
// birthYear = 1990;

var job = 'programmer';
job = 'student';
*/
/*
const now = 2037;
const ageAvi = now - 2005;
const ageSarah = now - 2020;
console.log(ageAvi, ageSarah);

console.log(ageAvi * 2, ageAvi / 10, 2 ** 3);

const firstName = "Avi";
const lastName = "Shukla";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1

x--; // x = x - 1
x--; // x = x - 1
console.log(x);

//Comparison operators

console.log(ageAvi > ageSarah);

console.log(ageSarah >= 18);


const isFullAge = ageSarah >= 18;

console.log(now - 2005 > now - 2018);
*/
/*
const now = 2037;
const ageAvi = now - 2005;
const ageSarah = now - 2020;

console.log(now - 2005 > now - 2018);

console.log(20 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //  x= y = 10
console.log(x, y);

const averageAge = (ageAvi + ageSarah) /2;
console.log(ageAvi, ageSarah, averageAge);
*/
/*

const firstName = 'Avi';
const job = 'programer';
const birthYear = 2005;
const year = 2037;
const avi = "I'am " + firstName + ', a '+( year - birthYear + ' years old ' + job);
console.log(avi);

const aviNew  = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(aviNew);


console.log(`Just a regular sting...`);

console.log('String with \n\
  multiple \n\
  lines');
  

console.log(`String with \n\
  multiple \n\
  lines`);
*/
/*
const age = 15;
// const isOldEnough = age >= 19;

if(age >= 18){
  console.log('Sarah can start driving license😊');
} else{
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young wait another ${yearsLeft} years`);
}

const birthYear = 2005;
let century;
if(birthYear<= 2000){
  century = 20;
}else{
  century = 21
}
console.log(century);*/
/*
//Type conversion
const inputYear = '2005';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 18 );

console.log(Number('Avi'));
console.log(typeof NaN);

console.log(String(23),23);

//Type coercion

console.log('I am ' + 23 + ' years old');

console.log('23' - '10' - 3 );
console.log('23' + '10' + 3 );

console.log('23' * '2');
console.log('23' / '2');
*/
/*
// 5 falsy values = 0, ' ', undefined, null , NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Avi'));
console.log(Boolean(''));

const money = 10;

if(money){
  console.log('Dont spend it all');
}else{
  console.log("You should get a job");
}

let height = 0
if(height){
  console.log("Yay! height is defined");
}else{
  console.log("Height is undefined");
}
  */
/*
const age = "18";

if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

console.log(typeof favourite);

if (favourite === 23) {
  //'23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}
if (favourite !== 23) {
  console.log("why not 23");
}
*/
/*
const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

// if(shouldDrive){
//   console.log("Sarah is able to drive");
// }else{
//   console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDrivingLicense && hasGoodVision && isTired);


if(hasDrivingLicense && hasGoodVision && !isTired){
  console.log("Sarah is able to drive");
}else{
  console.log('Someone else should drive');
}
*/
/*
const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;

if(scoreDolphins>scoreKoalas){
  console.log("Dolphins win the trophy");
}else if(scoreKoalas>scoreDolphins){
  console.log("Koalas win the trophy");
}else{
  console.log("Both win the trophy");
}
  */

//Switch statement
// switch(day){
//   case 'monday': //day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }
/*
  const day = "friday";
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Enjoy the weekend");
}
*/

// const age = 19;
// age>=18 ? console.log("I like to drink wine") : console.log("I like to drink water");

/*
const bill = 275;
const tip = bill>= 50 && bill<=300 ? (15/100)*bill : (20/100)*bill;
console.log(bill, tip, bill+tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);*/
// Removes focus from the current browser window
