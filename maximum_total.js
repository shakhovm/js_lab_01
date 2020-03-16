/* ### 3. **Maximum Possible Total**
 ​
 Given an array of 10 numbers, return the **maximum possible total**
 made by summing just **5 of the 10  numbers**.

 @ param { Array } arr
*/
function maxTotal(arr) {
    let newArr = arr.slice();
    let maxSum = 0;
    newArr.sort((x, y) => y - x);
    for (let i = 0; i < 5; i++) {
        maxSum += newArr[i];
    }
    return maxSum;
}


console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 40