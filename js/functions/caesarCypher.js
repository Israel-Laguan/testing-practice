const caesarCypher = (key, str) => {
  let decipher = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      decipher += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
    } else {
      decipher += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
    }
  }


  return decipher;
};

export default caesarCypher;