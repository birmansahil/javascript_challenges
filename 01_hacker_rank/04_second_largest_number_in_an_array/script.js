// Find the second largest number in an array of N elements.

// Lets create a dummy array and sort it in descending order 
let myArray = [2, 3, 6, 6, 5];

myArray = myArray.sort(function (a,b) { return b - a });

// Loop through the array and find the first number that is smaller than our largest number, we print that number and break the loop
for (let i=0; i<myArray.length; i++) {
    if (myArray[i] < myArray[0]) {
        console.log(myArray[i]);
        break;
    }
}

// Another way to achieve this is by removing duplicate values and getting second number from the sorted array