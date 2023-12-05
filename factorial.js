// Factorial Calculator: Write a function that calculates the factorial of a given number

function factoCal(n) {
    if (n === 0 || n === 1 ) {
        return 1;
 
    } else {
        return n * factoCal(n - 1);
    }
}
let calResult = factoCal(10)
console.log(calResult);