"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} 💶`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}💶`;
  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);
const updatUI = function (acc) {
  //Display movements
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  ///Dispaly summary
  calcDisplaySummary(acc);
};
//Event handlers
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //Update UI
    updatUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //DOing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    //Update UI
    updatUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add the movement
    currentAccount.movements.push(amount);

    //Update UI
    updatUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(username);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);
console.log(...arr);

//Splice

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
console.log(arr);

//Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 's', 'a', 'f', 'g'];

console.log(arr2.reverse());
console.log(arr2);

//Concat

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

//Join
console.log(letters.join(' - '));
*/
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('avishukla'.at(-1));
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-----FOREACH------`);
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

// MAPS
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set

const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

// let dogJulia = [3, 5, 2, 12, 7];
// let dogKate = [4, 1, 15, 8, 3];
// const checkDogs = function (dogsJulia, dogsKate) {
//   const newDogsJulia = dogsJulia.slice(1, -2);
//   let correctedArr = [...newDogsJulia, ...dogsKate];
//   console.log(correctedArr);
//   correctedArr.forEach(function (dogAge, index) {
//     if (dogAge >= 5) {
//       console.log(
//         `Dog number ${index + 1} is an adult and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy.`);
//     }
//   });
// };
// checkDogs(dogJulia,dogKate);

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const movementsUsdFor = [];
// for (const mov of movements) {
//   movementsUsdFor.push(mov * eurToUsd);
// }
// console.log(movementsUsdFor);

// const movementsDescriptions = movements.map((mov, i) =>
//    `Movement ${i + 1}: You ${
//     mov > 0 ? "deposited" : "withdrew"
//   } ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsfor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsfor.push(mov);
//   }
// }
// console.log(depositsfor);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(movements);

//accumulator is like an snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let sum = 0;
// for (const mov of movements) {
//   sum += mov;
// }
// let balance2 = sum;
// console.log(balance2);

//MAximum value of movements array

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
///////////////////////////////////////////////////////////

// const calcAverageHumanAge = function (ages) {
//   const newAges = ages.map(function (dogAge) {
//     const humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//     return humanAge;
//   });

//   const filterAges = newAges.filter(function (dogAge) {
//     return dogAge >= 18;
//   });
//   console.log(filterAges);
//   const totalSum = filterAges.reduce(function (acc, dogAge) {
//     return acc + dogAge;
//   }, 0);
//   console.log(totalSum);
//   const avgAges = totalSum / filterAges.length;
//   console.log(avgAges);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const calcAverageHumanAge = function (ages) {
//   const avgHumanAge = ages
//     .map(dogAge => {
//       const humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//       return humanAge;
//     })
//     .filter(function (humanAge) {
//       return humanAge >= 18;
//     })
//     .reduce(function (acc, humanAge, arr) {
//       return acc + humanAge / arr.length;
//     }, 0);
//   // console.log(avgHumanAge);
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
//PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc=> acc.owner==='Jessica Davis')
// console.log(account);
// console.log(movements);
// const lastwithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastwithdrawal);

// const latestLargeMovementIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 2000
// );
// console.log(latestLargeMovementIndex);

// console.log(movements);
// console.log(movements.includes(-130));

//Every

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // //Seperate callback
// const deposit = mov=> mov>0;
// console.log(movements.some(deposit));
// console.log(movements.(deposit));

// //Strings
// const owners = ["Jonas", "Zach", "Adam", "Martha,"];
// console.log(owners.sort());

// console.log(movements);

// //
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b < a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);
// movements.sort((a, b) => b - a);
// console.log(movements);

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? "deposit" : "withdrawals"
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "Very Active";
  if (movementCount >= 4) return " Active";
  if (movementCount >= 1) return "Moderate";
  return "Inactive";
});
console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

console.log(groupedAccounts);