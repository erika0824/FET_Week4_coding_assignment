/*** DATA ***/
let id = 0;

document.getElementById('add-book-button').addEventListener('click', () => {
    const bookShelfTable = document.getElementById('book-shelf-table');
    const row = bookShelfTable.insertRow(1);
    row.setAttribute('id', `${id}`);
    row.insertCell(0).innerHTML = document.getElementById('title-input').value;
    row.insertCell(1).innerHTML = document.getElementById('author-input').value;
    row.insertCell(2).innerHTML = document.getElementById('genre-input').value;
    //create delete button and adds 1 to id
    let actions = row.insertCell(3);
    actions.appendChild( createDeleteButton(id++) );
        //clears out the values     
        document.getElementById('title-input').value = '';
        document.getElementById('author-input').value = '';
        document.getElementById('genre-input').value = '';
    })
    

function createDeleteButton(id) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.className = 'btn btn-outline-danger';
    deleteButton.onclick = () => {
        let elementToDelete = document.getElementById(`${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return deleteButton;
}

