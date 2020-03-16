/*
  @ param {string} char
 */
function isLetter(char) {
    return char.toUpperCase() !== char.toLowerCase();
}

/* ### 2. **Average Word Length**
 ​
 Create an average word calculator function. The function must take in text and return the number of the
 average word length. **Ignore punctuation when counting the length.**

 @ param {string} words
*/
function avgWordLengthCalc(words) {
    const arr = words.split(' ');
    if (arr.length === 0) {
        return 0;
    }

    let wordCounter = 0;
    for (const letter in words) {
        wordCounter += isLetter(words[letter]);
    }
    return Math.round((wordCounter / arr.length) * 100 ) / 100;
}

console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
console.log(avgWordLengthCalc("")); // 0