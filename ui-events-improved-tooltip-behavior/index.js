// attach event listener to container
house.addEventListener('mouseover', (e) => {

    if (!e.target.dataset.tooltip) {
        return
    }

    displayTooltip(e.target);
});

house.addEventListener('mouseout', (e) => {
    destroyTooltip(e.target);
})

// create a function that will display tooltip
function displayTooltip(element) {
    // get coords of current tooltip element
    const coordinates = element.getBoundingClientRect();
    // create tooltip
    const tooltip = document.createElement('div');
    // add its required class   
    tooltip.classList.add('tooltip');
    // add its text
    tooltip.textContent = element.dataset.tooltip;
    // attach to DOM
    house.append(tooltip);
    //position tooltip below its element
    tooltip.style.top = coordinates.bottom + 'px';
    // center it
    tooltip.style.left = coordinates.left + (coordinates.width / 2) - (tooltip.clientWidth / 2) + 'px';
    // add margin top
    tooltip.style.marginTop = '5px';
}

function destroyTooltip(element) {
    // find tooltip element
    const tooltip = document.querySelector('.tooltip');
    
    // if there is tooltip remove it
    if (tooltip) {
        tooltip.remove();
    }
}