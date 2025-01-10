'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
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

//event listner

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
// const getJson = function (url, errMsg = 'Something Went wrong.') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'djsjdusd';

//       if (!neighbour) return;
//       //country 2
//       return fetch(
//         `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}!!!`);
//       renderError(`Something went wrong!! ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getCountryData = function (country) {
  //country 1
  getJson(
    `https://restcountries.com/v2/name/${country}?fullText=true`,
    ' Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // const neighbour = 'djsjdusd';

      if (!neighbour) throw new Error('No neighbour found!');
      //country 2
      return getJson(
        `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}!!!`);
      renderError(`Something went wrong!! ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('india');
});

getCountryData('jdhjdd');
*/
//https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(resp => {
      if (!resp.ok) throw new Error(`Something went wrong ${resp.status}`);
      return resp.json();
    })
    .then(data => {
      const obj = data;
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://restcountries.com/v2/name/${data.countryName}?fullText=true`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Something went wrong ${res.status}`);
      return res.json();
    })
    .then(res => {
      renderCountry(res[0]);
      console.log(res);
    })

    .catch(err => console.log(`Something went wrong. ${err.message}!!`));
};

btn.addEventListener('click', function () {
  whereAmI(-33.933, 18.474);
});
*/

// console.log('test start'); //1
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0); //3

// Promise.resolve('Resolved Promise 1').then(res => console.log(res)); //2

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000; i++) {}
//   console.log(res);
// });

// console.log('Test end'); //4

//Building a Promise

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!!!');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win !!!');
    } else {
      reject(new Error('You Lost your money!!!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying Settimeout
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('You win!!!').then(x => console.log(x));
Promise.reject('You win!!!').catch(x => console.error(x));
*/
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
    const { lat, lng } = pos.coords;
  
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })

    .then(resp => {
      if (!resp.ok) throw new Error(`Something went wrong ${resp.status}`);
      return resp.json();
    })
    .then(data => {
      const obj = data;
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://restcountries.com/v2/name/${data.countryName}?fullText=true`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Something went wrong ${res.status}`);
      return res.json();
    })
    .then(res => {
      renderCountry(res[0]);
      console.log(res);
    })

    .catch(err => console.log(`Something went wrong. ${err.message}!!`));
};
btn.addEventListener('click', whereAmI);
*/

///////////////////////////////
//Image loading feature
///////////////////////////////

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };
// let imgs = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.onload = () => {
//       imgs.append(img);
//       resolve(img);
//     };
//     img.onerror = () => {
//       reject(new Error('Image failed to load'));
//     };
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image loaded successfully:', img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded succesfully', img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.log(err); // Handle the error if image fails to load
//   });

//Async await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //Geo location
//     const pos = await getPosition();
//     const { lat, lng } = pos.coords;

//     //Reverse geocoding
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     );

//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     //Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.countryName}?fullText=true`
//     );
//     if (!res.ok) throw new Error('Problem getting location data');

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.countryName}`
//   } catch (err) {
//     console.error(err);
//     renderError(`!!!${err.message}`);
//   }
// };

// console.log('1: will get location');

// // const city = whereAmI();
// // console.log(city);

// whereAmI().then(city=> console.log(city)).catch(err => console.log(err.);)

// console.log('2: Finsihed getting location');

const get3Countries = async function (c1,c2,c3) { 
    try {
      await  = 
    }catch(err){
      console.log(err);
    }  
}
