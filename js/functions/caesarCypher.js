// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Israel Laguan
 * @author Fabricio Garcia
 * @version 1.1.0
 */

/**
  * Move the letter in dictionary (from A to Z)
  * @param {Number} char CharCode of a letter in UTF-16 code
  * @param {Number} shift Translation in dictionary position
  * @param {Boolean} isUpper if that letter is Uppercase
  */
const shiftInDictionary = (char, shift, isUpper) => {
  const shifting = isUpper ? String.fromCharCode(((char + shift - 65) % 26) + 65)
    : String.fromCharCode(((char + shift - 97) % 26) + 97);
  return shifting;
};


/**
 * Obfuscate given text, or reverse obfuscated string when you want to unlock
 * unlock.
 *
 * The Caesar cipher is one of the earliest known and simplest ciphers.
 * It is a type of substitution cipher in which each letter in the plaintext
 * is 'shifted' a certain number of places down the alphabet.
 * For example, with a shift of 1, A would be replaced by B, B would become C,
 * and so on. The method is named after Julius Caesar, who apparently used
 * it to communicate with his generals.
 * @param {Number} shift Translation in dictionary position
 * @param {String} str String to work with
 * @returns {String} Result
 */
const caesarCypher = (shift, str) => str.split('').map((letter, i) => {
  const isUpper = letter === letter.toUpperCase();
  return shiftInDictionary(str.charCodeAt(i), shift, isUpper);
}).join('');


export default caesarCypher;