// Challenge 2 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Clone the complexObject three times using the spread operator to clone.
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const clone1 = deepClone(userObject);
const clone2 = {...clone1};
const clone3 = {...clone1};

// Store the cloned objects in an array
const cloneArray = [clone1, clone2, clone3];

// Sort the array of cloned objects based on the 'age' property in ascending order
cloneArray.sort((a, b) => (a.age > b.age) ? 1 : -1)

// Log the sorted array to the console
console.log(cloneArray);
