// Create a function that checks if the input/parameter is an even number

function evenChecker(number) {
    if (number % 2 === 0) {
        return `${number} you've entered an even number.`;
    } else {
        return `${number} oh! that's not an even number.`;
    }
}

console.log(evenChecker(4));

// 2 Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

function rangeLog(n1, n2) {
    for (let n = n1; n<=n2; n++)
     {
        console.log(n);
   }
}
rangeLog(4, 20);

// 3.Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3. Submition time is exactly 10am tomorrow. no extension

function addRange(start, end) {
    let sum = 0; 
    for (let i = start; i <= end; i++) {
        sum += i;
       
    }
    return sum;
}
let result = addRange(10, 30);
console.log (result);

