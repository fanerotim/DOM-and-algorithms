// get arrows
const leftArrow = document.querySelector('.arrow');
const rightArrow = document.querySelectorAll('.arrow')[1];

// get carousel container
const container = document.querySelector('ul');

// center left arrow on x, y axes
leftArrow.style.left = container.getBoundingClientRect().left + leftArrow.clientWidth + 'px';
leftArrow.style.top = (container.clientHeight / 2) - (leftArrow.clientHeight / 2) + 'px';

// center right arrow on x, y axes
rightArrow.style.left = container.getBoundingClientRect().right - (rightArrow.clientWidth * 2) + 'px';
rightArrow.style.top = (container.clientHeight / 2) - (rightArrow.clientHeight / 2) + 'px';

// attach event handler to left / right buttons
leftArrow.addEventListener('click', () => handler(leftArrow));
rightArrow.addEventListener('click', () => handler(rightArrow));

function handler(arrow) {
    // if condition is go-back, scroll left the size of 3 images, which is container width
    if (arrow.outerText == '⇦') {
        container.scrollLeft -= container.clientWidth;
    } else {
        // else = scroll forward / right, scroll right the size of 3 images
        container.scrollLeft += container.clientWidth;
    }
}