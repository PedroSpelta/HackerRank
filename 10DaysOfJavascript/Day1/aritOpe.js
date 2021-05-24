/**
 *
 * @param {Number} length
 * @param {Number} width
 * @return {Number} Area of the retangle
 */
function getArea(length, width) {
  // Write your code here
  const area = width * length;
  return area;
}

/**
 *
 * @param {Number} length
 * @param {Number} width
 * @return {Number} Perimeter
 */
function getPerimeter(length, width) {
  // Write your code here
  const perimeter = 2*(length+width);
  return perimeter;
}

console.log(getArea(2, 2), getPerimeter(2, 2));
