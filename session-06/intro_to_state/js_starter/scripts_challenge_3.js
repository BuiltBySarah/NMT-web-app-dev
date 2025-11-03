// // Challenge 3 Book constructor
// const userObject = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
//   address: {
//     street: "123 Main St",
//     city: "Perth",
//     zipCode: "6000",
//   },
//   skills: ["JavaScript", "HTML", "CSS"],
//   socialProfiles: {
//     twitter: "@johndoe",
//     linkedIn: "linkedin.com/in/johndoe",
//   },
//   isEmployed: true,
//   addSkills(newSkill) {
//     this.skills.push(newSkill);
//     console.log(this.skills.map((skill) => `<li>${skill}</li>`));
//   },
// };

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

  this.displayInfo = function () {
    console.log(
      `${this.firstName} is ${this.age} and has ${this.skills.length} skills`
    );
  };
}

let user = new UserObject("John", 52, false, "MQTT");
user.addSkill("JS");
user.displayInfo();
// // Displaying book information
// book1.displayInfo();
// book2.displayInfo();
