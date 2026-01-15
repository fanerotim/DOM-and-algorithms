// attach event listener to body to listen for mousedown events
document.onmousedown = function (e) {
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
    hero.style.zIndex = 100;
    // append it to body
    document.body.append(hero);
    hero.style.left = e.pageX - offsetX + 'px';
    hero.style.top = e.pageY - offsetY + 'px';

    // moveTo(hero, e.clientX, e.clientY);
    document.onmousemove = function (e) {
        console.log(e);
        moveTo(hero, e.pageX, e.pageY, offsetX, offsetY)
    }
}

// create a helper fn that updates coordinates of draggable items
function moveTo(hero, pointX, pointY, offsetX, offsetY) {

    let left = pointX - offsetX;
    let top = pointY - offsetY;
    
    // make sure element being dragged does not cross left edge
    if (left < 0) {
        left = 0;
    }   

    // calculate scroll width, so we can find right edge
    const scrollWidth = window.outerWidth - window.innerWidth;
    const rightEdge = window.innerWidth - scrollWidth;

    // make sure the element does not cross right window edge
    if ((pointX + hero.clientWidth) - offsetX > rightEdge) {
        return;
    }
    
    // make sure the element being dragged does not cross top edge
    if (top < 0) {
        top = 0;
    }

    hero.style.left = left + 'px';
    hero.style.top = top + 'px';
}

// create event listener for mouseup, so we can remove mousemove handler
document.onmouseup = function (e) {
    document.onmousemove = null;
}

// disable default browser behavior on img elements when drag starts
document.ondragstart = function () {
    return false;
}

