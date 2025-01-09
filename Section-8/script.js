'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
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

// Page navigation part

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

//Tabbed component part

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Activate content area

  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "arguement" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// //Sticky navigation
// const obsCallback = function (entries,observer) {
//   entries.forEach(entry=>{
//     console.log(entry)
//   })

// };
// const obsOptions = {
//   root: null,
//   threshold: [0,0.2]
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace the src with data-src

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider component
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
      // const { slide } = e.target.dataset;

      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
// curSlide = 1: -100%,0%,100%,200%

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if(window.scrollY>initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// });

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
/*
const h1 = document.querySelector('h1');

// Going downwards of h1 tag that are its child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //This is for selecting child nodes ( nodes are of different types) of h1
console.log(h1.children); //It returns the HTML collection of all the child elements of h1

h1.firstElementChild.style.color = 'white'; //mutating the first child element
h1.lastElementChild.style.color = 'orangered'; //mutating the last child element

//Going upwards in html that are parents of h1

console.log(h1.parentNode); //Selects the parent of h1 that is header

console.log(h1.parentElement); //slects the parent element of h1 too

h1.closest('.header').style.background = 'var(--gradient-secondary)'; //Selects the closest parent of h1 parent is given in the string arguement

h1.closest('h1').style.background = 'var(--gradient-primary)'; //when you  pass the same arguement on whom youre applying the closest it will give you the same element

// Going sideways : selecting siblings

//selects the previous and next sibling of html (We can only select direct sibling of an element)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); //We first selected the direct parent and then called its children

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and dom tree built');
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded');
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
// });
