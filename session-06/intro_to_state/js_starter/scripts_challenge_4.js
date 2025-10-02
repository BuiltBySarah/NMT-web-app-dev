// Challenge - Stage 4
/**
 * State-based UI Component
 * @param {String} selector The selector for the target elementent
 * @param {Object} options  Component options
 */

/**
 * Render a new UI
 */

// The list of books
let MyListComponent = 
function (selector, options) {
    this.element = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template  
};

let app = new MyListComponent('#app', {
    data: {
        books: ['Harry Potter I','Harry Potter II','Harry Potter III']
    },
    template: function (props) {
        let html = 
            '<ul>' +
                props.books.map(function (book) {
                    return '<li>' + book + '</li>';
                }).join('') +
            '</ul>';
        return html;
    }
});

// Render the list
MyListComponent.prototype.render = 
function () {
    this.element.innerHTML = 
    this.template(this.data);
};

app.render();

// Update the UI
app.data.books.push("Harry Potter IV");
app.data.books.push("Harry Potter V");
app.render();
