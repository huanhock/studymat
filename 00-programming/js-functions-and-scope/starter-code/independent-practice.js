//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var words = ["Eric", "Tai", "Chi", "Loong"];

function lengths (array) {
  var answer = array.map(function(elem) {
    return elem.length;
  });
  return answer;
}

word_length = lengths(words);

console.log(word_length);


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here


function transmogrifier (a, b, c) {
  var product = Math.pow(a * b, c);
  return product;
}

console.log(transmogrifier(3, 4, 2));


// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var string1 = "D4rknessR3igns";

function wordReverse (element) {
  return element.split("").reverse().join("");
}

console.log(wordReverse(string1));
