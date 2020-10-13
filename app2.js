import { findById } from './findById.js';
import { seedAndGetProducts } from './utils.js';
import { renderPokemon } from './render-pokeman.js';


const catchButton = document.querySelector('catch-button');
const resetButton = document.querySelector('reset-button');
const radios = document.querySelectorAll('input');
const 



for (let i = 0; i < radios.length; i++) {
    console.log(radios[i].value);
}


const ul = document.getElementById('pokemon');
const pokemonList = seedAndGetProducts();
for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    const li = renderPokemon(pokemon);
    ul.appendChild(li);
}