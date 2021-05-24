/* eslint-disable max-len */
/**
 *
 * @param {string} secondInteger The string representation of an integer.
 * @param {string} secondDecimal The string representation of a floating-point
 * number.
 * @param {string} secondString A string consisting of one or more
 * space-separatedwords.
 */
function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank ';

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(firstInteger + parseInt(secondInteger));

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  console.log(firstDecimal + parseFloat( secondDecimal));

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(firstString + secondString);
}

performOperation('4', '12.0', 'best place');
