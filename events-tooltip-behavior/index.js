// create a variable that holds scroll offset on y axis
let pageYOffset = window.pageYOffset;

// add a mouseover event listener to body, so we can check all elements
document.body.addEventListener('mouseover', (e) => {

    // return if element does not have data-tooltip attribute;
    if (!e.target.dataset.tooltip) {
        return;
    }

    // assign data-tooltip value to a constant
    const text = e.target.dataset.tooltip;

    // create tooltip
    const tooltip = document.createElement('p');

    // add its css class
    tooltip.classList.add('tooltip');

    // assign data value as text
    tooltip.textContent = text;

    // get coordinates of e.target, so we can place the tooltip properly
    const coordinates = e.target.getBoundingClientRect();

    // position the tooltip on the x axis
    tooltip.style.left = coordinates.left + 'px';

    const tooltipMargin = 5; // hardcoded as it's a requirement;
    
    // attach element, so we can get its height
    e.target.append(tooltip);
    const tooltipHeight = document.querySelector('.tooltip').offsetHeight;

    // conditionally position on the y axis as we want to show the tooltip above the element if there is space
    if (coordinates.top < tooltipHeight) {
        // centers tooltip at the bottom of the element
        tooltip.style.top = pageYOffset + coordinates.bottom + 'px';
        tooltip.style.marginTop = tooltipMargin + 'px';
    } else {
        // centers tooltip at the top of the element
        tooltip.style.top = coordinates.top - (coordinates.height + tooltipHeight) + 'px';
        tooltip.style.marginBottom = tooltipMargin + 'px';
    } 
})

// add a mouseout event listener to remove the dynamically created tooltip
document.body.addEventListener('mouseout', (e) => {
    // return if event fires on an element we are not listening for
    if (!e.target.dataset.tooltip) {
        return;
    }

    // remove the tooltip element
    const tooltip = document.body.querySelector('.tooltip');
    tooltip.remove();
})