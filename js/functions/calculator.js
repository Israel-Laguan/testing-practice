// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Israel Laguan
 * @author Fabricio Garcia
 * @version 1.1.0
 */

/**
 * Add 2 Numbers
 *
 * In an addition equation, addends are the numbers
 * that are added together to give a sum
 * @property {Number} addend1
 * @property {Number} [addend2]
 * @return {Number|null} sum
 */
const add = (addend1, addend2 = null) => {
  if (!addend2 && typeof addend1 === 'number') return addend1;
  if (typeof addend1 !== 'number' || typeof addend2 !== 'number') {
    return null;
  }
  return addend1 + addend2;
};

/**
 * Subtract one number from other
 *
 * In a subtraction equation, the subtrahend is taken away
 * from the minuend to give a difference.
 * @param {Number} subtrahend Number taken away from original value
 * @param {Number} [minuend] The original quantity
 * @returns {Number|null} difference
 */
const subtract = (subtrahend, minuend = null) => {
  if (!minuend && typeof subtrahend === 'number') return subtrahend;
  if (typeof subtrahend !== 'number' || typeof minuend !== 'number') {
    return null;
  }
  return subtrahend - minuend;
};

/**
 * Multiply 2 numbers
 *
 * In a multiplication equation, factors are multiplied to give a product.
 * @param {Number} factor1 Number to be multiplied
 * @param {Number} factor2 Number to be multiplied
 * @returns {Number|null} product
 */
const multiply = (factor1, factor2) => {
  if (!factor2 && typeof factor1 === 'number') return factor1;
  if (typeof factor1 !== 'number' || typeof factor2 !== 'number') {
    return null;
  }
  return factor1 * factor2;
};

/**
 * Divide one number between another
 *
 * In a division equation, a dividend is divided by
 * a divisor (it can't be 0) to give a quotient.
 * @param {Number} dividend The original quantity
 * @param {Number} divisor Parts or sections of same size
 * @return {Number|null} quotient
 */
const divide = (dividend, divisor) => {
  if (divisor === undefined && typeof dividend === 'number') return dividend;
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    return null;
  }
  if (divisor === 0) return null;
  return dividend / divisor;
};

/**
 * Basic calculator object for 2 integers with
 * add, subtract, divide, and multiply operations.
 * @returns
 */
const calculator = () => ({
  add,
  subtract,
  multiply,
  divide,
});

export default calculator;