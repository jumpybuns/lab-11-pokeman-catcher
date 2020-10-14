export function renderPokeman(pokeman) {
    const li = document.createElement('li');
    li.className = pokeman.category;
    li.title = pokeman.description;

    const h3 = document.createElement('h3');
    h3.textContent = pokeman.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = './api.js' + pokeman.image;
    img.alt = pokeman.name + ' image';
    li.appendChild(img);


}