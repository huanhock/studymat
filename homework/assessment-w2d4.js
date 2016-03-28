// Initialize grades

var numStudents = 100;
var classGrades = [];

var initializeGrades = function (num) {
	var arr = [];
	for (var i = 0; i <= num; i++) {
		arr.push(parseInt((Math.random() * 10), 10));
	}
	return arr;
};

classGrades = initializeGrades(numStudents);

// Remove min/max

var removeMinMax = function (grades) {
	var min = 0;
	var max = 0;
	var arr = [];
	for (var i = 0; i <= grades.length; i++) {
		if (grades[i] > max) {
			max = grades[i];
		}

		if (grades[i] < min) {
			min = grades[i];
		}
	}

	for (var j = 0; j <= grades.length - 1; j++) {
		if (grades[j] !== min && grades[j] !== max) {
			arr.push(grades[j]);
		}
	}

	console.log("Maximum score: " + max);
	console.log("Minimum score: " + min);

	return arr;

};

// Remove duplicates

var removeDuplicates = function (grades) {
  var exists = {};
  var uniqGrades = [];

  grades.forEach(function (elem) {
		if (!exists[elem]) {
			exists[elem] = true;
			uniqGrades.push(elem);
		}
  });

  return uniqGrades;

};

var uniqueGrades = removeDuplicates(classGrades);

// Clone array

var arrayClone = function (array) {
  var clone = [];
  array.forEach(function (elem) {
		clone.push(elem);
  });

  return clone;

};

// Deep-clone array

var deepClone = function (array) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		result.push(array[i].isArray ? deepClone(array[i]) : array[i]);
	}

	return result;

};

console.log(deepClone([1, 2, [4, 0]]));
