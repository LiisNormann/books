//event elements
const form = document.querySelector("form");
const booksList = document.querySelector('#books-list');

//get form input data 
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');

//events
form.addEventListener("submit", addBook);

function addBook(event) {
    //define book info through input value
    const title = titleInput.value; 
    const author = authorInput.value;
    const isbn = isbnInput.value;
    
    //create <tr> element
    const tr = document.createElement('tr');
    
    //title
    //create <td> element
    let td = document.createElement('td');
    //create text element
    let text = document.createTextNode(title);
    //add text to <td>
    td.appendChild(text);
    //add td to tr
    tr.appendChild(td);

    //author
    //create <td> element
    td = document.createElement('td');
    //create text element
    text = document.createTextNode(author);
    //add text to <td>
    td.appendChild(text);
    //add td to tr
    tr.appendChild(td);

    //isbn
    //create <td> element
    td = document.createElement('td');
    //create text element
    text = document.createTextNode(isbn);
    //add text to <td>
    td.appendChild(text);
    //add td to tr
    tr.appendChild(td);

    //Create X link to delete row
    //create <td> element
    td = document.createElement('td');
    //create <a> element
    const link = document.createElement('a');
    //set href to <a>
    link.setAttribute('href', `#`)
    //add css style (gap between text and link)
    link.className = 'secondary-content';
    //add X text to link
    link.appendChild(document.createTextNode('X'));
    //add <a> to <td>
    td.appendChild(link);
    //add td to tr
    tr.appendChild(td);
    //add tr to tbody
    booksList.appendChild(tr);

    //save task
    //addTaskToLocalStorage(task);
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    event.preventDefault();
}