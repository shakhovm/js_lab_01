/* ### 4. **Pentagonal Number calculator**
 ​
 The *n*th pentagonal number P*n* is the number of distinct dots in a pattern of dots consisting of the outlines of
 regular pentagons with sides up to n dots, when the pentagons are overlaid so that they share one vertex.

 @ param { Number } n
*/
function pentagonalNumber(n) {
    return (3*n**2 - n) / 2;
}

// If we shouldn't use formula
function pentagonalNumberAlt(n) {
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        totalSum += n + i;
    }
    return totalSum;
}

console.log(pentagonalNumber(1)); // 1
console.log(pentagonalNumber(2)); // 5
console.log(pentagonalNumber(5)); // 35
console.log(pentagonalNumber(9)); // 117

console.log(pentagonalNumberAlt(1)); // 1
console.log(pentagonalNumberAlt(2)); // 5
console.log(pentagonalNumberAlt(5)); // 35
console.log(pentagonalNumberAlt(9)); // 117