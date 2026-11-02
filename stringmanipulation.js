// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// Output: "olleh"


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("JavaScript"));
// Output: 10


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// Output: "Hello World Javascript"