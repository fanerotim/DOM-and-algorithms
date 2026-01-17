// attach event listener to body to listen for mousedown events
document.onmousedown = function (e) {
    e.preventDefault();
    // check if user clicked on a draggable item
    const isDraggable = e.target.classList.contains('draggable');

    // if not draggable return
    if (!isDraggable) {
        return;
    }

    // update element's position to absolute
    const hero = e.target;

    // get coordinates of selected hero element
    const heroCoordinates = hero.getBoundingClientRect();
    // get its offset values - calculates how much to offset based on where the element was clicked on
    const offsetX = e.clientX - heroCoordinates.left;
    const offsetY = e.clientY - heroCoordinates.top;

    // update its position to absolute, so we can move it around the window
    hero.style.position = 'absolute';

    // make sure it is always on top of other elements
    hero.style.zIndex = 1000;
    // append it to body
    document.body.append(hero);
    hero.style.left = e.pageX - offsetX + 'px';
    hero.style.top = e.pageY - offsetY + 'px';

    // moveTo(hero, e.clientX, e.clientY);
    document.onmousemove = function(e) {
        moveTo(hero, e.pageX, e.pageY, offsetX, offsetY, e);
    }
}

// create a helper fn that updates coordinates of draggable items
function moveTo(hero, pointX, pointY, offsetX, offsetY, e) {
    // initialize left and top variables that we'd be using to upate position of draggable element
    let left = pointX - offsetX;
    let top = pointY - offsetY;

    // positionY is the current location of the cursor on the window. offsetY is used, so the top of the element is calculated from the point of the click (in can be in the middle of the element)
    // my idea is to check if it is less than 0
    const positionY = e.clientY - offsetY;

    // and in that case scroll up by positionY, which is negative value, so scroll is upwards
    if (positionY < 0) {
        window.scrollBy(0, positionY)
    }

    // make sure element being dragged does not cross left edge
    if (left < 0) {
        left = 0;
    }

    // calculate scroll width, so we can find right edge
    const scrollWidth = window.outerWidth - window.innerWidth;
    const rightEdge = window.innerWidth - scrollWidth;

    // make sure the element does not cross right window edge
    if ((pointX + hero.clientWidth) - offsetX > rightEdge) {
        left = rightEdge - hero.offsetWidth;
    }

    // make sure the element being dragged does not cross top edge
    if (top < 0) {
        top = 0;
    }

    // TODOs
    // - disable scroll right. when element reaches right edge, window should not scroll
    // - make sure that when element reaches window's top or bottom edge it cannot go beyond that point
    // console.log(window);
    // console.log(hero.getBoundingClientRect().bottom);

    hero.style.left = left + 'px';
    hero.style.top = top + 'px';
}

// create event listener for mouseup, so we can remove mousemove handler
document.onmouseup = function () {
    document.onmousemove = null;
}

// disable default browser behavior on img elements when drag starts
document.ondragstart = function () {
    return false;
}

