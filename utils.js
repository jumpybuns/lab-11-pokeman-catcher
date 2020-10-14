// import { pokeData } from './api.js';

// const inputRadios = document.querySelectorAll('input');
// const POKEMON = 'POKEMON';


// results_div.classlist.remove('hidden');

// for (let i = 0; i < inputRadios.length; i++) {
//     radios[i].disabled = true;
//     images[i].style.opacity = 0.5;
// }

// let currentCapturedPokemon = e.target.value;
// catch_results.textContent = `You captured ${currentCapturedPokemon}`;

// const localStorageCaptured = get_localStorage(LOCALSTORAGE);

// const checkLocalStorageCapture = findById(localStorageCaptured, currentCapturedPokemon);

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

// export function getFromLocalStorage(key) {
//     const item = localStorage.getItem(key);

//     return JSON.parse(item);
// }

// export function setInLocalStorage(key, value) {
//     const stringyItem = JSON.stringify(value);

//     localStorage.setItem(key, stringyItem);

//     return value;
// }

