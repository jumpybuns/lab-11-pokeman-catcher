/* eslint-disable no-unused-vars */
import { pokeData } from './api.js';

const resetButton = document.querySelector('#reset-button');
const pokeImages = document.querySelectorAll('img');
const capturedScoreSpan = document.getElementById('captured-score');
const inputRadios = document.querySelectorAll('input');

renderPokemon(); 



let captured = 0;
let encountered = 0;


inputRadios.forEach(input => {
    input.addEventListener('click', () => {
        captured++;
        capturedScoreSpan.textContent = captured;
        console.log(captured);
        const item = (pokeData, input);
        if (!item) {
            const item = {
                name: input.value,
                id: pokeData.id,
                quantity: 1
            };
            
            // item.push(initializedPokeItem);
        }
        else {
            item.encountered++;
        }
        renderPokemon(); 

    });
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