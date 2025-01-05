'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

//https://restcountries.com/v2/name/india

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}?fullText=true`
//   );

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html =
//       '<article class="country">' +
//       '<img class="country__img" src="' +
//       data.flag +
//       '" />' +
//       '<div class="country__data">' +
//       `<h3 class="country__name">${data.name}</h3>` +
//       `<h4 class="country__region">${data.region}</h4>` +
//       `<p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)}M people</p>` +
//       `<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>` +
//       `<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>` +
//       '</div>' +
//       '</article>';

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('india');
/*
const getCountryAndNeighbour = function (country) {
  //Ajax call country 1
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://restcountries.com/v2/name/${country}?fullText=true`
  );

  request.send();

  const renderCountry = function (data, className = '') {
    const html =
      '<article class="country ' +
      className +
      '">' +
      '<img class="country__img" src="' +
      data.flag +
      '" />' +
      '<div class="country__data">' +
      `<h3 class="country__name">${data.name}</h3>` +
      `<h4 class="country__region">${data.region}</h4>` +
      `<p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}M people</p>` +
      `<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>` +
      `<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>` +
      '</div>' +
      '</article>';

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country 1
    renderCountry(data);

    //Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();

    request2.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
    );

    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 Second passed');
  setTimeout(() => {
    console.log('2 Second passed');
    setTimeout(() => {
      console.log('3 Second passed');
      setTimeout(() => {
        console.log('4 Second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
const renderCountry = function (data, className = '') {
  const html =
    '<article class="country ' +
    className +
    '">' +
    '<img class="country__img" src="' +
    data.flag +
    '" />' +
    '<div class="country__data">' +
    `<h3 class="country__name">${data.name}</h3>` +
    `<h4 class="country__region">${data.region}</h4>` +
    `<p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}M people</p>` +
    `<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>` +
    `<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>` +
    '</div>' +
    '</article>';

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://restcountries.com/v2/name/${country}?fullText=true`
  );

  request.send();
  */

const request = fetch(`https://restcountries.com/v2/name/india?fullText=true`);
// console.log(request);

// const getCountryData = function (country) {
//   const request = fetch(
//     `https://restcountries.com/v2/name/${country}?fullText=true`
//   )
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     });
// };

const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      //country 2
      return fetch(
        `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

btn.addEventListener('click', function () {
  getCountryData('india');
});
