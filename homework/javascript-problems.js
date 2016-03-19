// Numbers and Strings

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

// array.reduce - find the largest number

var largestNumber = numbers.reduce(function (x, y) {
  if (x > y) {
    return x;
  }
  else {
    return y;
  }
});

console.log('largest number: ' + largestNumber);

// array.reduce - find the longest string

var longestString = strings.reduce(function (x, y) {
  if (x.length > y.length) {
    return x;
  }
  else {
    return y;
  }
});

console.log('longest word: ' + longestString);

// array.filter - find all even numbers

var evens = numbers.filter(function(element) {
  if (element % 2 === 0) {
    return element;
  }
});

console.log('even numbers: ' + evens);

// array.filter - find all odd numbers

var odds = numbers.filter(function (element) {
  if (element % 2 !== 0) {
    return element;
  }
});

console.log('odd numbers: ' + odds);

// array.join - zip two arrays together (odds & evens)

var joined = evens.concat(odds);

console.log('joined even and odd arrays: ' + joined);

// array.sort - sort the joined array from smallest to largest

var sorted = joined.sort(function (l, r) {
  return l - r;
});

console.log('sorted array: ' + sorted);

// array.map - return an array with all numbers cubed (x ^ 3)

var cubed = numbers.map(function (x) {
  return Math.pow(x, 3);
});

console.log('cubed array: ' + cubed);

// array.every - assert that all numbers are divisible by 3

var divisibleByThree = evens.every(function (n) {
  return n % 3 === 0;
});

console.log('All numbers divisible by three: ' + divisibleByThree);

// array.filter - find words that contain 'is'

var wordsWithIs = strings.filter(function(x) {
  return x.indexOf('is') >= 0;
});

console.log('words containing is: ' + wordsWithIs);

// remove the last word from strings

var lastWord = strings.pop();

console.log('popped word: ' + lastWord);

// put a new word 'yeah' in the end of the array

strings.push('yeah');

console.log('strings: ' + strings);

// remove the first word in the array

var word = strings.shift();

console.log('removed from start: ' + word);
console.log('strings: ' + strings);

// place a new word 'this' at the start of the array

strings.unshift('this');
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

// grab a subset of elements, first 3 elements

var sliced = strings.slice(0, 3);
console.log('subset: ' + sliced);
console.log('strings: ' + strings);

// replace the first 3 elements, with 'test' and '123'

var x = strings.splice(0, 3, 'test', '123');
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);

// Customers

var customers = [
  {firstname: 'Joe', lastname: 'Blogs'},
  {firstname: 'John', lastname: 'Smith'},
  {firstname: 'Dave', lastname: 'Jones'},
  {firstname: 'Jack', lastname: 'White'}
];

var result = customers
  .filter(function(person) {
    return person.firstname.indexOf('J') === 0;
  })
  .map(function(elem) {
    return {
      name: elem.firstname + ' ' + elem.lastname
    };
  })
  .sort(sortByName);

function sortByName (name1, name2) {
  if (name1.name < name2.name) {
    return - 1;
  }
  else if (name1.name > name2.name) {
    return 1;
  }
  else {
    return 0;
  }
}

console.log(result);