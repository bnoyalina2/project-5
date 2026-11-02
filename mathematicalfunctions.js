// 8. Factorial
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "Please enter a non-negative integer";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120


// 9. Prime Number Check
function isPrime(number) {
    if (number <= 1 || !Number.isInteger(number)) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false


// 10. Fibonacci Sequence
function fibonacci(terms) {
    if (!Number.isInteger(terms) || terms < 0) {
        return "Please enter a non-negative integer";
    }

    let sequence = [];

    let first = 0;
    let second = 1;

    for (let i = 0; i < terms; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    return sequence;
}

console.log(fibonacci(7));
// Output: [0, 1, 1, 2, 3, 5, 8]