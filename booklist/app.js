// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

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
// Clear Fields
UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



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
  
  // Add book to list
  ui.addBookToList(book);
  // Clear fields
  ui.clearFields(title, author, isbn);

  //console.log(title, author, isbn);
  //console.log(book);
  e.preventDefault();
});