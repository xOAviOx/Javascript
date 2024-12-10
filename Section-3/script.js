'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge(){
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  return age;
}
const firstName = 'Avi';
calcAge(2005);
 