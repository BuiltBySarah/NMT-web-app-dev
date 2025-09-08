// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
if (numbers.includes(5)) {
let users = [
  {
    firstName: "Aldus",
    lastName: "Huxley",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "John",
    lastName: "Huxley",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "Leif",
    lastName: "Huxley",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
];
users = [
  {
    firstName: "Aldus",
    lastName: "Huxley",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "Byron",
    lastName: "Nelson",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "Amelia",
    lastName: "Earhardt",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "Dennis",
    lastName: "The Mennace",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
  {
    firstName: "Marie",
    lastName: "Curie",
    age: 30,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Perth",
      zipCode: "6000",
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
      twitter: "@aldus",
      linkedIn: "linkedin.com/in/ahuxley",
    },
    isEmployed: true,
  },
];
// Check if the array includes the number 5
let filterUsers = users.filter((user) => user.skills[0] === "JavaScript");

// If true, filter out numbers less than 5
let filteredNumbers = numbers.filter(item => {return item < 5})

// Then square each number in the resulting array
let squared = filteredNumbers.map(item => {return item * item});

// Output the final array
document.getElementById("OutputField").innerHTML = squared;

// Output a message if the number 5 is not in the array
} else {
    document.getElementById("OutputField").innerHTML = "5 not found in array.";
}



