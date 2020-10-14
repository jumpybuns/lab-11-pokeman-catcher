import pokemonArray from './data.js';

const POKEMON = 'POKEMON';



export function getRandomPokeman(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

export function removeCaughtPokeman(someId) {
    for (let i = 0; i < someId.length; i++) {
        someId.splice(i, 1);
    }
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function seedAndGetProducts() {
    let seed = (getFromLocalStorage(POKEMON));

    if (!seed) {
        const hardStringySeed = JSON.stringify(pokemonArray);

        localStorage.setItem(POKEMON, hardStringySeed);
        seed = pokemonArray;
    }
    return seed;
}

