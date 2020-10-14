/* eslint-disable no-unused-vars */
import { pokeData } from './api.js';
import { findById } from './utils.js';
import { BAG } from './constants.js';

const resetButton = document.querySelector('#reset-button');
const pokeImages = document.querySelectorAll('img');
const encounteredScoreSpan = document.getElementById('encountered-score');
const turnsSpan = document.getElementById('turns-score');
const inputRadios = document.querySelectorAll('input');
const pokeResults = [];
renderPokemon(); 

//increment encountered each time a pokemon id is encountered

function createNewPokemon(someArray, someId) {
    const itemNew = findById(pokeData, someId);
    const item = {
        id: someId,
        name: itemNew.pokemon,
        image: itemNew.url_image,
        encountered: 0,
        captured: 0,
    };
    someArray.push(item);
}

function incrementCaptured(someArray, someId) {
    let result = findById(someArray, someId);
    if (!result) {
        createNewPokemon(someArray, someId);
        result = findById(someArray, someId);
    
    }
    result.captured++;
}
//when newpokemon appear, increment encountered
function incrementEncountered(someArray, someId) {
    let appearance = findById(someArray, someId);
    if (!appearance) {
        createNewPokemon(someArray, someId);
        appearance = findById(someArray, someId);
        

    }
    appearance.encountered++;
    
}

let captured = 0;
let encountered = 0;
let turns = 0;

for (let i = 0; i < inputRadios.length; i++) {
    inputRadios[i].addEventListener('change', (e) => {
        turns++;
        if (turns === 10) {
            setInLocalStorage(BAG, pokeResults);

            window.location = './results/index.html';
        }
        const capturedPokemon = findById(pokeData, Number(e.target.value));
        turnsSpan.textContent = turns;  
        const encounteredPokemon = Number(inputRadios[0].value);
        incrementEncountered(pokeResults, Number(inputRadios[0].value));
        incrementEncountered(pokeResults, Number(inputRadios[1].value));
        incrementEncountered(pokeResults, Number(inputRadios[2].value));
        if (capturedPokemon.id === encounteredPokemon) {
            incrementCaptured(pokeResults, capturedPokemon.id);
        }

        renderPokemon(); 
    });
}  


resetButton.addEventListener('click', () => {
    captured = 0;
    encountered = 0;
    turnsSpan.textContent = 0;

});



function renderPokemon() {
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


}

function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return stringyItem;
}
