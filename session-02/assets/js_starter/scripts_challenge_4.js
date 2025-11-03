// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
const i = numbers.indexOf(5);

// If the number 5 is found in the array
if (numbers.includes(5)) {

// Console log each number in the array up to and including 5
let filteredArray = numbers.filter(item => {return item <=5})

filteredArray.forEach(item => {
    console.log(item);
})

// Output a message if the number 5 is not in the array
} else {
    document.getElementById("OutputField").innerHTML = "5 not found in array.";
}
