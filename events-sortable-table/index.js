// get container of th (table header) elements, so we can attach a click event listener to it
const container = document.querySelector('tr');
// get tbody, so we can update it when ready
const tbody = document.querySelector('tbody');
// get all rows that we need to sort and convert them into an array, so we can use [] methods
const rows = Array.from(document.querySelector('tbody').rows);
// initilize a variable where we will store sorted/filered rows
let sortedRows;

container.onclick = (e) => {
    // return if user clicked somewhere outside the table header 
    if (!e.target.dataset.type) {
        return;
    }

    const filter = e.target.dataset.type;
    
    switch(filter) {
        case 'number':
            sortedRows = rows.sort((a, b) => Number(a.cells[0].innerText) - Number(b.cells[0].innerText));
            break;
        case 'string':
            sortedRows = rows.sort((a, b) => a.cells[1].innerText.localeCompare(b.cells[1].innerText));
            break;
    }
    updateTable(sortedRows);
}

function updateTable(sortedRows) {
    // get a reference to all tr elements
    const trs = tbody.querySelectorAll('tr');
    // loop through all of them
    for (let i = 0; i < trs.length; i++) {
        // clone each tr
        const clonedTr = sortedRows[i].cloneNode(true);
        // finally DOM
        tbody.replaceChild(clonedTr, trs[i])
    }
}