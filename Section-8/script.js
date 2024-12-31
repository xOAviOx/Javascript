'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//

//Smooth scrolling of learn more button

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //gets the coordinates of the element
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //Gets the coordinates of the targetted element of event lsitener

  console.log('Current Scroll (X/Y)', window.scrollX, scrollY); //Gets the current scroll position meaning the disance of the current position of the element from the top

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //Gets the current height and width of the viewport

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.screenY
  // );

  //Old way
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //New way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element

//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
////////////////////////////////////////////////////

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

// .insertAdjacentHTML in Bankist app

const message = document.createElement('div'); // takes the tagname of html element as an arguement and creates a dom element

message.classList.add('cookie-message'); //Adds a class to the dom element we created (NOTE: It is not on dom yet we have to manually add it to the dom)

message.textContent =
  'We use cookies for improved functionality and analytics.'; //It was just setting the text into the dom element we created

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class= "btn btn--close-cookie"> Got it </button>'; // Adds HTML content to our dom element that we created

const header = document.querySelector('.header');

// header.prepend(message); //We inserted the dom elemetn into the header using prepend(it adds the element as first child of header)

// header.append(message); //It shifted the dom element to last child of the header element because it adds the element as the last child of the main element

//append and prepend shifts the same element not add

//To insert the same element at two places we need

// header.append(message.cloneNode(true)) NOTEL: But we do not want this

header.append(message);

// 2 more elements to add or insert elements
// header.before(message); // Inserts the elemtn before the header element as a sibling

// header.after(message); // Inserts the element after the header element as a sibling

//Delete the element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); //this is a new and simple way where you select the element directly

    //Another way

    message.parentElement.removeChild(message); //We first check the parent element and then from its child elements we delete the selected child that we want
  });

//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); //We can get the styles from this method
console.log(getComputedStyle(message).height); //We can get the styles from this method

message.style.height = Number.parseFloat(
  getComputedStyle(message).height + 40 + 'px'
); //Using pars float to add or subtract values from the styles

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

//Setting attributes
logo.alt = 'Bankr logo';

//Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankr'); // we can set attributes by this method too

console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes (attribute  that start with he word data)
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
//Already covered
*/

///Types of events

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: You are reading the heading!');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);//We can romove the event listener at any point in the code
*/

// h1.onmouseenter = function (e) {
//   alert('addEventListener: You are reading the heading!');
// }; //This is the old way of listening to events now a days add event listener is used

//Addvenetlister is better bcause it adds another function to the element while the latter one just overrides it
/////////////////////////////////////////////
//Events bubbling and capturing

// rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);

//   //Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   }
// );
