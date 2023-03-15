// In this example, you are given a single line consisting of property type values of a car in the following order:
// TypeName ModelName ColorName
// These values are assigned to an object car that has the properties type, model and color (read the code in the editor carefully to learn how that is done). Your task is to complete the code to print the object.

// Creating a random object to visualize what we need to print and how we can achieve it
let car = {
    type: "Honda",
    model: "Civic",
    color: "Black"
}

console.log(car);

// It is a bit tricky to solve beacuse how the input is given 
let input = "Fiat 500 White";
let obj = input.split(" ");

let myObject = {
    type: obj[0],
    model: obj[1],
    color: obj[2]
}

console.log(myObject);