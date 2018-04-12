/////////////////////////////////////////
// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

/////////////////////////////////////////
// UI Constructor
function UI() {}
// Adds a book to the list
UI.prototype.addBookToList = (book) => {
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
// Show Alert
UI.prototype.showAlert = (message, className) => {
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
// Delete Book
UI.prototype.deleteBook = (target) => {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}
// Clear Fields
UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


/////////////////////////////////////////
// Event Listeners
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
  if(title === '') {
    ui.showAlert('Title field is required.', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
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
  // delete
  ui.deleteBook(e.target);

  e.preventDefault();
});