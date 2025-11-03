// Challenge - Stage 1
let addBook = function (book) {
//data
// If there's no book to do, do nothing
if (!book || book.length < 1) return;
// Get the list
let list = document.querySelector('#list');
// Create a new list item
// template
let listItem = document.createElement('li');
listItem.textContent = book;
// Append the item to the list
// render
list.appendChild(listItem)
};

let book = "Harry Potter IV";

addBook(book);
