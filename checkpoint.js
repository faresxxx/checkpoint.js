// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

// 4. Find Maximum
function findMaximum(arr) {
    return Math.max(...arr);
}

// 5. Find Minimum
function findMinimum(arr) {
    return Math.min(...arr);
}

// 6. Sum of Array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => {
        return sum + num;
    }, 0);
}

// 7. Filter Array
function filterArray(arr, condition) {
    const filtered = arr.filter(condition);
    return filtered;
}
// filterArray([1, 2, 3, 4, 5], num => num > 3);

// 8. Factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 9. Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 10. Fibonacci Sequence
function fibonacciSequence(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }
    const sequence = [0, 1];
    while (sequence.length < n) {
        const last = sequence[sequence.length - 1];
        const secondLast = sequence[sequence.length - 2];
        sequence.push(last + secondLast);
    }
    return sequence;
}

