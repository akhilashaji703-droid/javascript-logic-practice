// ========================================
// Day 6 - JavaScript Logic Practice
// ========================================

// 1. Find the Largest Number in an Array
const array1 = [12, 45, 7, 89, 23, 56, 91, 18];

let largest = array1[0];

for (let i = 1; i < array1.length; i++) {
  if (array1[i] > largest) {
    largest = array1[i];
  }
}

console.log("Largest Number:", largest);

// ========================================

// 2. Find the Sum of All Numbers in an Array
const array2 = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}

console.log("Sum:", sum);

// ========================================

// 3. Reverse a String
const text = "JavaScript";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log("Reversed String:", reversed);

// ========================================

// 4. Count the Number of Vowels in a String
const sentence = "Learning JavaScript is fun";

let count = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    count++;
  }
}

console.log("Vowel Count:", count);

// ========================================

// 5. Remove Duplicate Values from an Array
const array3 = [2, 5, 3, 2, 8, 5, 1, 8, 4, 3];

let uniqueArray = [];

for (let i = 0; i < array3.length; i++) {
  if (!uniqueArray.includes(array3[i])) {
    uniqueArray.push(array3[i]);
  }
}

console.log("Unique Array:", uniqueArray);