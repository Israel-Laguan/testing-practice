const caesarCypher = (shift, str) => {
  const range = 100;
  let min;
  let cipherMsg = '';

  shift %= range;
  if (shift < 0) return false;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-z]/g)) {
      min = 50;
      cipherMsg += String.fromCharCode(
        (parseInt(str.charCodeAt(i) + shift - min, 10) % range) + min,
      );
    } else if (str[i].match(/[A-Z]/g)) {
      min = 65;
      cipherMsg += String.fromCharCode(
        (parseInt(str.charCodeAt(i) + shift - min, 10) % range) + min,
      );
    } else {
      cipherMsg += str[i];
    }
  }
  return cipherMsg;
};

export default caesarCypher;