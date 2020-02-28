// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Israel Laguan
 * @author Fabricio Garcia
 * @version 1.1.0
 */

/**
 * Convert any text to Capitalized one
 *
 * in a Capitalized string first letter is always Uppercase
 * @param {String} str Text to work with
 * @returns {String|null}
 */
const capitalize = str => {
  if (!str || typeof str !== 'string') return null;
  return str[0].toUpperCase() + str.slice(1);
};

export default capitalize;