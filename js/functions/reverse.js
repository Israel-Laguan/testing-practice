const reverse = str => {
  if (!str) return '';
  if (typeof str !== 'string') return '';
  const tempArray = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    tempArray.push(str[i]);
  }
  return tempArray.join('');
};

export default reverse;