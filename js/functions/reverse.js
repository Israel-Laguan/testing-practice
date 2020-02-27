function reverse(strIn) {
    const tempArray = [];
    for (let i = strIn.length - 1; i >= 0; i--) {
        tempArray.push(strIn[i]);
    }
    return tempArray.join('');
}