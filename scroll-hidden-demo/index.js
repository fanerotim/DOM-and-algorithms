// get all lis 
const lis = document.querySelectorAll('li');
// get source btn that will be cloned
const sourceBtn = document.querySelector('.delete-btn');
// get wrapper, so we can disable its scroll
const wrapper = document.querySelector('.wrapper');
// get container, so we can add padding of scrollbar when it is removed
const container = document.querySelector('.container');

// loop through lis
for (let li of lis) {
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
    // call showModal fn
    showModal(item);
}

function showModal(item) {

    // create modal
    const modalWrapper = document.createElement('div');
    // add class
    modalWrapper.classList.add('modal-wrapper')
    // make sure modal takes up the whole container size, while preserving scolled out part
    modalWrapper.style.top = wrapper.scrollTop;
    // add paragraph to the modal
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Are you sure you want to delete this item?'
    // attach paragraph to modal
    modalWrapper.append(paragraph);

    // create action buttons container
    const actionButtonsContainer = document.createElement('div');
    // create yes / approve button
    const approveBtn = document.createElement('button');
    approveBtn.textContent = 'Yes';
    // attach event listener and pass item as we want to delete / remove it from DOM
    approveBtn.addEventListener('click', () => approve(item));
    // create no / reject button
    const rejectBtn = document.createElement('button');
    rejectBtn.textContent  = 'No';
    // add event listener and pass modalWrapper as we want to remove it from DOM
    rejectBtn.addEventListener('click', () => reject(modalWrapper));
    // attach both buttons to their wrapper
    actionButtonsContainer.append(approveBtn);
    actionButtonsContainer.append(rejectBtn);
    // attach action buttons wrapper to modal wrapper
    modalWrapper.append(actionButtonsContainer);
    // finally attach modal to container
    container.append(modalWrapper);
}

function approve(item) {
    // delete item
    container.removeChild(item);
    // call reject fn to remove modalWrapper and reset scrollbar behavior
    reject(document.querySelector('.modal-wrapper'))
}

function reject(modalWrapper) {
    // remove the modal. delete it from DOM
    container.removeChild(modalWrapper);
    // reset / remove padding-right to make sure content stays in place / does not flick when scrollbar reappears
    container.style.paddingRight = 0;
    // allow wrapper to scroll again
    wrapper.style.overflow = 'scroll';
}