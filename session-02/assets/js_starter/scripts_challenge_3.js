// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
if (numbers.includes(5)) {

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



