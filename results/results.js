import { BAG } from '../constants.js';

const resultsSpan = document.getElementById('results-span');
const playAgainButton = document.getElementById('play-Again-Button');

const item = localStorage.getItem(BAG);
const parsedItem = JSON.parse(item);

resultsSpan.textContent = 'Your Results!' + item;

const pokemonCaught = [];
const pokemonLabels = [];
const pokemonEncoutered = [];

for (let i = 0; i < item.length; i++) {
    const bagItem = item[i];

    pokemonCaught.push(bagItem.captured);
    pokemonLabels.push(bagItem.name);
    pokemonEncoutered.push(bagItem.encountered);

} 

playAgainButton.addEventListener('click', () => {
    console.log('Play Again Clicked');

    localStorage.clear(0);
    window.location = '../index.html';

});