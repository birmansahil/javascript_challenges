// Write a JavaScript function to get the day of a particular date.
// Several lines of input containing dates in MM/DD/YYYY format.
// The program should end when it encounters -1.

let myDate = "10/11/2009";

function findDay(myDate) {
    if (myDate == -1) {
        return;
    } else {
        myDate = new Date(myDate);
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        console.log(day[myDate.getDay()]);
    }
}

findDay(myDate);