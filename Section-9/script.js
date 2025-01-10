'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instance properties because it is creted on the instanced object
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this, never create a method inside an constructor function

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const avi = new Person('Avi', 2005);
console.log(avi);
//1. New empty object {} is created
//2. function is called and its 'this' keyword will be set to the newly created object in step 1
//3. {} the object is linked to a prototype
//4. fucntion automatically returns the empty object {} at beginning

//Await
const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

console.log(avi instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

avi.calcAge();
matilda.calcAge();

console.log(avi.__proto__);
console.log(avi.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(avi));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//So prototype is not the proto type of the Person constructor function but the objects that will be linked to it

Person.prototype.species = 'Homo Sapiens';
console.log(avi);
console.log(avi.species);
console.log(avi.hasOwnProperty('firstName'));
console.log(avi.hasOwnProperty('species'));

console.log(avi.__proto__);
//Object.prototype is the top of prototype chain
console.log(avi.__proto__.__proto__);
console.log(avi.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 3, 4, 2, 1, 3, 4, 2, 1, 2, 23, 34];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

Person.hey = function () {
  console.log('Hey there !!!');
  console.log(this);
};
Person.hey();

//Cahllenge 1

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return this.speed + 10;
};
Car.prototype.brake = function () {
  return this.speed - 5;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log('Original car', car1);
console.log('Accelrated car', car1.accelerate());
console.log('Slowed down car', car1.brake());
*/
//Class expression
// const PersonCl = class{}
//
//Class declaration
//
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };

  get age() {
    return 2037 - this.birthYear;
  }

  // set fullName(name) {
  //   console.log(name);
  //   if (name.includes(' ')) this.fullName = name;
  //   else alert(`${name} is not a full name`);
  // }
  static hey() {
    console.log('Hey there !!!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are not hoisted
// 2. Class are also first class citizen
// 3. Classes are executed in strict mode

const account = {
  owner: 'Avi',
  movements: [200, 400, 2500, 150],

  get latest() {
    return this.movements.slice(-1).pop;
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// class Carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     return (this.speed = this.speed + 10);
//   }

//   brake() {
//     return (this.speed = this.speed - 5);
//   }

//   get speedUS() {
//     return (this.speed = this.speed / 1.6);
//   }
//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }
// const bmw = new Carcl('Ford', 120);
// console.log(bmw);
// console.log(bmw.accelerate());
// console.log(bmw.brake());
// console.log(bmw.speedUS);
// console.log(bmw.speedUS);
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
//Inheritance between "classes": constructor functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge(``);

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.dir(Student.prototype.constructor);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Hey ${this.fullName}`);
//   };

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   static hey() {
//     console.log('Hey there !!!');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();

///Encapsulation: Private class fields and methods
//1. Public Fields
//2. Private fields
//3.Public Methods
//4. Privat Methods

//Static version of these 4

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
    //Not chainable
  }
  //Public interface (API)
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-100);

const movements = acc1
  .deposit(300)
  .withdrawal(100)
  .withdrawal(50)
  .requestLoan(32929)
  .withdrawal(400)
  .getMovements();

console.log(acc1);
console.log(movements);
// Account.test();
