// Method to dynamically add a list of books to the sidebar
export function addBooks(books) {
  const booksContainer = document.createElement("aside");
  booksContainer.className = "section subtitle is-5 has-text-primary";

  const bookList = document.createElement("ul");
  bookList.id = "list";

  books.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });

  booksContainer.appendChild(bookList);
  const container = document.querySelector(".container");
  container.appendChild(booksContainer);
}