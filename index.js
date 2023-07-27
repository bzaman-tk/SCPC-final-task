
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 
const reverseString = inputString => {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfPositiveNumbers = numbersArray => {
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

// Task 4: Create a function that takes a sorted array of numbers and a target value as input.The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers

function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no such pair is found
    return [];
}

// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?";

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    return password;
}

// Task 7: Implement a function that converts a Roman numeral to an integer.The function should take a Roman numeral string(e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(romanNumeral) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbolValue = romanValues[romanNumeral[i]];
        const nextSymbolValue = romanValues[romanNumeral[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            result += nextSymbolValue - currentSymbolValue;
            i++;
        } else {
            result += currentSymbolValue;
        }
    }

    return result;
}

