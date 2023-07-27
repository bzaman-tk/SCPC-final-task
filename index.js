
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 
const reverseString = inputString => {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfPositiveNumbers = numbersArray=> {
    return numbersArray.reduce((sum, num) => {
        if (num > 0) {
            return sum + num;
        } else {
            return sum;
        }
    }, 0);
}

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
    const elementCount = {};
    let maxCount = 0;
    let mostFrequentElement;

    for (const element of arr) {
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }

        if (elementCount[element] > maxCount) {
            maxCount = elementCount[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

