let table = document.getElementById('bagua-table');

/* your code */

let isEditing = false;

// add click event listener on the table
table.onclick = function (e) {
    let td = e.target;

    // there is a strong element that breaks the textarea behavior
    // if user clicks on strong, then update td to its closest td
    if (e.target.nodeName === 'STRONG') {
        td = e.target.closest('td');
    }

    // if we are editing a td then return
    if (isEditing) {
        return;
    }
    // get selected table data
    // get its coordinates
    const tdCoordinates = td.getBoundingClientRect();

    // create textarea element
    const textArea = document.createElement('textarea');
    // update its value and height to match the ones of the selected td
    textArea.value = td.innerHTML;
    textArea.style.height = tdCoordinates.height + 'px';
    // replace the table data with our textarea
    td.replaceWith(textArea);
    // update isEditing flag
    isEditing = true;
    // focus the opened textarea
    textArea.focus();

    // create and add the two buttons: ok and cancel
    const okButton = document.createElement('button');
    const cancelButton = okButton.cloneNode(true);

    // add text to buttons
    okButton.textContent = 'OK';
    cancelButton.textContent = 'Cancel';

    // append buttons to body
    document.body.append(okButton);
    document.body.append(cancelButton);

    // get textarea coordinates, as we will be using its left coordinates to position the buttons
    const textAreaCoordinates = textArea.getBoundingClientRect();
    // get closest tr, as we will be using its bottom coordinates to position the buttons
    const tr = textArea.closest('tr');
    const trCoordinates = tr.getBoundingClientRect();
    
    // position buttons on the page; absolute position (left and top props);
    okButton.style.left = textAreaCoordinates.left + 'px';
    okButton.style.top = trCoordinates.bottom + 'px';

    cancelButton.style.left = textAreaCoordinates.left + okButton.clientWidth + 'px';
    cancelButton.style.top = trCoordinates.bottom + 'px';

    // add event listeners to buttons
    okButton.addEventListener('click', okHandler);
    cancelButton.addEventListener('click', cancelHandler);

    // event handlers
    function okHandler(e) {
        td.innerHTML = textArea.value;
        cancelHandler();
    }

    function cancelHandler(e) {
        // replace textArea with td again
        textArea.replaceWith(td);
        // update isEditing to false, as the user is no longer editing
        isEditing = false;
        // remove both buttons
        okButton.remove();
        cancelButton.remove();
    }
}



