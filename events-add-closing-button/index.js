// get all cards; each has a class '.pane';
const cards = document.querySelectorAll('.pane');
// get source btn as we'd be cloning it for each card
const sourceButton = document.querySelector('.remove-button');

// loop over all cards and attach a button to it
for (let card of cards) {
    // create a new button for each card
    const button = sourceButton.cloneNode(true);

    // attach click event handler to each btn
    button.addEventListener('click', (e) => handler(card));

    // add position absolute to each btn, so we can place it inside card
    button.style.position = 'absolute';
    
    // get card coordinates
    const coordinates = getCoordinates(card);

    // place button in top right corner
    button.style.left = coordinates.right;
    button.style.top = card.clientTop + 'px';
    card.append(button);

}

// helper fn to return coordinates of each element (in our case - each card)
function getCoordinates(element) {
    const coordinates = element.getBoundingClientRect();
    return coordinates;
}

function handler(element) {
    // get card container
    const container = document.querySelector('div');
    // delete card
    container.removeChild(element);
}