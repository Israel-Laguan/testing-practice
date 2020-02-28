// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Fabricio Garcia
 * @author Israel Laguan
 * @version 1.1.0
 */

/**
  * @typedef {Object} ArrayInformation
  * @property {Number|null} average Sum of all items divided by length
  * @property {Number|null} min Minimum value on array
  * @property {Number|null} max Maximum value on array
  * @property {Number} length How many items in the array
  */

/**
   * Check if the parameter given is a Number Array
   * @param {*} array Object to check if is Array
   * @returns {Boolean} If is an Array composed of Numbers
   */
const isNumberArray = (array) => {
  if (!Array.isArray(array)) return false;
  if (array.length < 1 || typeof array !== 'object') return false;
  if (array.some(item => typeof item !== 'number')) return false;
  return true;
};

/**
  *  Takes an array of numbers and returns an object with
  *  useful information.
  *
  * @param {Number[]} array Non Empty array with numbers
  * @returns {ArrayInformation} Information analyzed
  */
const analyze = array => (isNumberArray(array) ? {
  average: array.reduce((total, current) => total + current) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
} : {
  average: null,
  min: null,
  max: null,
  length: 0,
});

export default analyze;
