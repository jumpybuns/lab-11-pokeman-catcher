

export function getRandomImage() {
    var images = ['http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'];
    var image = [Math.floor(Math.random() * images.length)];

    return image;

}

export function displayRandomImage() {

    var htmlImage = document.getElementById('#image1');
    htmlImage.src = getRandomImage();
}
// displayRandomImage();