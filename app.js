//event elements
const form = document.querySelector("form");
const booksList = document.querySelector('#books-list');

//get form input data 
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');

//events
form.addEventListener("submit", addBook);
booksList.addEventListener('click', deleteBook);

function addBook(event) {
    event.preventDefault();
    //define book info through input value
    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = [title, author, isbn];
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
    link.setAttribute('href', `#`);
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

    //save book
    addBookToLocalStorage(book);

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
}

//save input value of a book to localStorage
function addBookToLocalStorage(book) {
    let books;
    //check if there is an element 'books' in local storage, if not then create an empty array
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    //add new element to an array
    books.push(book);
    //overWrite localStorage with the added element
    localStorage.setItem('books', JSON.stringify(books));
}

//if X is clicked, the book is removed from the list
function deleteBook(event) {
    //if X is clicked
    if(event.target.textContent === 'X') {
        //ask for confirmation
        if(confirm('Do you want to delete this book?')){
            //delete parent element (li) of the target (X) at the event (click)
            event.target.parentElement.parentElement.remove();
            let bookISBN = event.target.parentElement.previousElementSibling.textContent;
            deleteBookFromLocalStorage(bookISBN);
        }
    }
}

function deleteBookFromLocalStorage(bookISBN) {
    let books;
    //check if there is an element 'books' in local storage, if not then create an empty array
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    //remove an element without leaving holes in the array
    books.forEach(function (book, index) {
        //if the second book array item is the same as bookISBN (isbn value)
        if(book[2] === bookISBN) {
            //get the item index and delete 1 item aka that exact item
            books.splice(index, 1)
        }
    });

    //overwrite localStorage without the deleted element
    localStorage.setItem('books', JSON.stringify(books));
}