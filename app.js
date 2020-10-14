/* eslint-disable no-unused-vars */
import { pokeData } from './api.js';
import { findById } from './utils.js';

const resetButton = document.querySelector('#reset-button');
const pokeImages = document.querySelectorAll('img');
const encounteredScoreSpan = document.getElementById('encountered-score');
const capturedScoreSpan = document.getElementById('captured-score');
const inputRadios = document.querySelectorAll('input');
const pokeResults = [];
renderPokemon(); 



let captured = 0;
let encountered = 0;
for (let i = 0; i < inputRadios.length; i++); {
    inputRadios[i].addEventListener('change', (e) => {
        
        inputRadios.forEach((input) => {
            let item = findById(pokeResults, Number(input.value));
            if (!item) {
                const itemNew = findById(pokeData, Number(input.value))
                item = {
                    id: Number(input.value),
                    name: itemNew.item,
                    encountered: 1,
                    captured: 0,
                }
                pokeResults.push(item);
            } else {
                item.encountered++;
                encounteredScoreSpan.textContent = encountered;
            }
        })

        const capturedPokemon = findById(pokeResults, Number(e.target.value));
        capturedPokemon.captured++;
        capturedScoreSpan.textContent = captured;    
        document.getElementById('one').checked = false;
        document.getElementById('two').checked = false;
        document.getElementById('three').checked = false;

        renderPokemon(); 

});  


resetButton.addEventListener('click', () => {
    captured = 0;
    encountered = 0;
    capturedScoreSpan.textContent = 0;

});



export function renderPokemon() {
    let randomPoke = Math.floor(Math.random() * pokeData.length);
    let randomPoke2 = Math.floor(Math.random() * pokeData.length);
    let randomPoke3 = Math.floor(Math.random() * pokeData.length);
    
    while (randomPoke === randomPoke2) {
        randomPoke = Math.floor(Math.random() * pokeData.length);
    }

    while (randomPoke2 === randomPoke3) {
        randomPoke2 = Math.floor(Math.random() * pokeData.length);
    }

    while (randomPoke3 === randomPoke) {
        randomPoke3 = Math.floor(Math.random() * pokeData.length);
    }

    pokeImages[0].src = pokeData[randomPoke].url_image;
    pokeImages[1].src = pokeData[randomPoke2].url_image;
    pokeImages[2].src = pokeData[randomPoke3].url_image;

    inputRadios[0].value = pokeData[randomPoke].id;
    inputRadios[1].value = pokeData[randomPoke2].id;
    inputRadios[2].value = pokeData[randomPoke3].id;


};

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return stringyKey;
};
