// get nested elements
const container = document.querySelector('.container');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

container.addEventListener('click', (e) => containerHandler(e));

// e.target changes to the element that was clicked while e.currentTarget is always the same - the element with an event handler
function containerHandler(e) {
    console.log('CONTAINER START')
    console.log(e.target, 'e.target');
    console.log(e.currentTarget, 'e.currentTarget');
    console.log('CONTAINER END');
}

// If each element has a handler, and the event is left to bubble, then e.target (event on which was clicked) remains the same, but the e.currentTarget changes.
// When the event bubbles to parent, in this case container, then e.currentTarget is container element, and at the start is equal to e.target (the clicked html element).

// OUTER
outer.addEventListener('click', outerHandler);

function outerHandler(e) {
    console.log('OUTER START');
    console.log(e.target, 'e.target');
    console.log(e.currentTarget, 'e.currentTarget')
    console.log('OUTER END');
}

// INNER
inner.addEventListener('click', innerHandler);

function innerHandler(e) {
    console.log('INNER START');
    console.log(e.target, 'e.target');
    console.log(e.currentTarget, 'e.currentTarget')
    console.log('INNER END');
}