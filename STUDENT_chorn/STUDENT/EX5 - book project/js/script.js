// TODO 
let books = document.querySelectorAll('.book-name');
let bookNumber = document.getElementById('books-number');
let bookTitle = document.getElementById('books-titles');
let nameOfbooks = '';
for (let book of books){
    nameOfbooks += book.textContent + ',';
} 
bookNumber.textContent = books.length;
bookTitle.textContent = nameOfbooks;