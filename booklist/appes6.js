// ES6

/**************************************
 * Class
 * Book
 *************************************/
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


/*************************************
 * Class
 * UI -- User Interface
**************************************/
class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    // Append to list
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create a div
    const alert = document.createElement('div');
    alert.className = `alert ${className}`;
    alert.appendChild(document.createTextNode(message));

    // Insert
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    container.insertBefore(alert, form);
    // remove after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


/**************************************
 * Class
 * Store
 *************************************/
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI;
    books.forEach(book => {
      ui.addBookToList(book)
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    // set to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    let books = Store.getBooks();
    
    books.some((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }

      return book.isbn === isbn;
    });

    // set back to LS
    localStorage.setItem('books', JSON.stringify(books));
  }
}



/////////////////////////////////////////
// Event Listeners
// DOM loaded
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Submit
document.getElementById('book-form').addEventListener('submit', (e) => {
  // get form values
  const title = e.target.title.value,
        author = e.target.author.value,
        isbn = e.target.isbn.value;
  
  // Instantiate Book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();
  
  // Validate
  if(title === '' && isbn === '') {
    ui.showAlert('Title and ISBN# fields are required.', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Add to LS
    Store.addBook(book);

    // Alert success
    ui.showAlert('Book added.', 'success');
    // Clear fields
    ui.clearFields(title, author, isbn);
  }
  
  //console.log(title, author, isbn);
  //console.log(book);
  e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', (e) => {
  const ui = new UI();
  // Show alert
  ui.showAlert(`Book removed`, 'success');
  // delete of UI
  ui.deleteBook(e.target);
  // delete from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
});

