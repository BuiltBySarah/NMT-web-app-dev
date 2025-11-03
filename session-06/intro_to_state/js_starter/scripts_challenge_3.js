// Challenge 3 Book constructor

// Creating instances using the Book constructor
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

// Displaying book information
book1.displayInfo();
book2.displayInfo();
