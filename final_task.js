// 1.Write a function that counts how many times each character appears in a string. e.g "Hello World"
function countCharacters(string) {
    let counts = {};

    for (let char of string) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(countCharacters("hello"));

// 2.Write a JavaScript function that reverse a number.
function reverseNumber(num) {
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(4356))

// 3.Write a JavaScript function that returns a passed string with letters in alphabetical order.
//  Example string : 'webmaster' Expected Output : 'abeemrstw'

function alphabeticalOrder(name) {
    return name.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"))

// 4.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(phrase) {
    let count = 0;
    let vowels = "aeiou";

    for (let char of phrase.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Mitchelle"));

// 5.Write a JavaScript function that accepts a string as a parameter and
//  converts the first letter of each word of the string in upper case.
//  Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '

function capitalizeLetters(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] =
            words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capitalizeLetters("the quick brown fox"));