'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

////////////////////////////////////////////////////
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
