// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Israel Laguan
 * @author Fabricio Garcia
 * @version 1.1.0
 */

/**
 * Takes a string and returns it reversed
 * @param {String} str String to be reversed
 * @returns {String|null} reversed string
 */
const reverse = str => {
  if (!str) return null;
  if (typeof str !== 'string') return null;
  const tempArray = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    tempArray.push(str[i]);
  }
  return tempArray.join('');
};

export default reverse;