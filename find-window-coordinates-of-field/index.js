// get field
const field = document.getElementById('field');

// attach event listener to field to listen for clicks
field.addEventListener('click', handler);

function handler() {
    const coords = field.getBoundingClientRect();
    //upper outer left corner: 28:83
    const upperLeftOuterCorner = `${Math.floor(coords.left)}:${Math.floor(coords.top)}`;
    // upper inner left corner: 37:92
    const innerLeftCorner = Math.floor(coords.left + ((coords.width - field.clientWidth) / 2));
    const innerUpperCorner = Math.floor(coords.top + ((coords.height - field.clientHeight) / 2));
    const upperLeftInnerCorner = `${innerLeftCorner}:${innerUpperCorner}`;
    // bottom right outer corner: 247:252
    const bottomRightOuterCorner = `${Math.floor(coords.right)}:${Math.floor(coords.bottom)}`
    // bottom right inner corner: 237:242
    const innerRightCorner = Math.floor(coords.right - ((coords.width - field.clientWidth) / 2));
    const innerBottomCorner = Math.floor(coords.bottom - ((coords.height - field.clientHeight) / 2));
    const bottomRightInnerCorner = `${innerRightCorner}:${innerBottomCorner}`
}