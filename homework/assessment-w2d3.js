// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product

var numbers = [
  '73167176531330624919225119674426574742355349194934',
  '96983520312774506326239578318016984801869478851843',
  '85861560789112949495459501737958331952853208805511',
  '12540698747158523863050715693290963295227443043557',
  '66896648950445244523161731856403098711121722383113',
  '62229893423380308135336276614282806444486645238749',
  '30358907296290491560440772390713810515859307960866',
  '70172427121883998797908792274921901699720888093776',
  '65727333001053367881220235421809751254540594752243',
  '52584907711670556013604839586446706324415722155397',
  '53697817977846174064955149290862569321978468622482',
  '83972241375657056057490261407972968652414535100474',
  '82166370484403199890008895243450658541227588666881',
  '16427171479924442928230863465674813919123162824586',
  '17866458359124566529476545682848912883142607690042',
  '24219022671055626321111109370544217506941658960408',
  '07198403850962455444362981230987879927244284909188',
  '84580156166097919133875499200524063689912560717606',
  '05886116467109405077541002256983155200055935729725',
  '71636269561882670428252483600823257530420752963450'
];
// What is the value of this product?
var tempArray = [];
var largestRow = [];
var largestCombo = [];

function productCalc (array, x, y) {
  var product = 1;
  for (var i2 = x; i2 < x + y; i2++) {
    product = product * parseInt(array[i2], 10);
  }
  return product;
}

function largestGroupProduct (element) {
  var largest = 0;
  var counter = 13;
  for (var i = 0; i < element.length; i++) {
    // var temp = parseInt(element[i], 10) * parseInt(element[i + 1], 10) * parseInt(element[i + 2], 10) * parseInt(element[i + 3], 10);
    var temp = productCalc(element, i, counter);
    if (temp >= largest) {
      largest = temp;
      for (var a = 0; a < counter; a++) {
        tempArray[a] = parseInt(element[a + i], 10);
      }
    }
  }
  largestRow.push(tempArray);
  tempArray = [];
  return largest;
}

function compareLargest (element) {
  var largest = 0;
  for (var i = 0; i < element.length; i++) {
    if (element[i] > largest) {
      largest = element[i];
      largestCombo = largestRow[i];
    }
  }
  return largest;
}

var largestProduct = compareLargest(numbers.map(largestGroupProduct));

console.log('Largest Product: ' + largestProduct);
console.log('Largest Combo: ' + largestCombo);