import { handleClick } from './eventHandlers.js';

import { addBooks } from './domUpdate.js';

import { post } from './post.js';


// Method to initialise the app
function initialiseApp() {
    handleClick("button1", "click");
    handleClick("button2", "mouseover");
    handleClick("button3", "dblclick");

  // Add some sample posts

  const post1 = new post("First Post", "This is the content of the first post.");
  post1.addPost()

  const post2 = new post("Second Post", "This is the content of the second post.");
  post2.addPost()

  // Add some sample books
  const books = ["Harry Potter I", "Harry Potter II", "Harry Potter III"];
  addBooks(books);
}

// Initialise the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialiseApp);