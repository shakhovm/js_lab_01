/* Create a function that converts an object into array
 ​
 toArr({ key1: 'value1', key2: 'value2' }) // [["key1", "value1"], ["key2", "value2"]]
 toArray({}) // [] Return an empty array if the object is empty.

 @ param {object} object
*/
function toArr(obj) {
    let arr = [];
    Object.keys(obj).forEach(key => arr.push([key, typeof obj[key] !== "object" ?
        obj[key] : toArr(obj[key])]));
    return arr;
}

//
//

//arr = toArr(obj);
console.log(toArr({ key1: 'value1', key2: 'value2' })); // [["key1", "value1"], ["key2", "value2"]]
console.log(toArr({})); // [] Return an empty array if the object is empty.