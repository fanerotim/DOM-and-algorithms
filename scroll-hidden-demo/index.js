// get all lis 
const lis = document.querySelectorAll('li');
// get source btn that will be cloned
const sourceBtn = document.querySelector('.delete-btn');
// get wrapper, so we can disable its scroll
const wrapper = document.querySelector('.wrapper');
// get container, so we can add padding of scrollbar when it is removed
const container = document.querySelector('.container');

document.body.overflow = '';

// loop through lis
for (let li of lis) {
    const span = document.createElement('span');

    // clone sourceBtn, attach event listener, reset its display, so it's visiable and append it to li.
    const button = sourceBtn.cloneNode(true);
    button.addEventListener('click', () => handler(li));
    button.style.display = 'block';
    li.append(button)
}

function handler(item) {
    // get scrollbar width
    const scrollbarWidth = document.body.clientWidth - document.body.offsetWidth;
    // add the scrollbar width as padding-right to ul container; 
    // this is the fix of the content flick problem
    container.style.paddingRight = `${scrollbarWidth}px`;
    // hide scrollbar
    wrapper.style.overflow = 'hidden';

    // delay alert so overflow:hidden can be applied and the content flick be seen;
    setTimeout(() => {
        alert('Are you sure you want to delete this image?');
    }, 100)
}