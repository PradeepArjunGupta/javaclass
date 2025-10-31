/*
console.log("line 1")
// setTimeout ( callback, delayTime)
setTimeout(() => {
    console.log("line 2")
},
    4000)

console.log("line 3")
*/
/*
function typeOfSum(a, b) {
  let sum = a + b;
  return typeof sum;
}
typeOfSum()

console.log(typeOfSum(12, 1)); // Logs: "number"
console.log(typeOfSum("d", 1)); // Logs: "string"
console.log(typeOfSum(1, "a")); // Logs: "string"
console.log(typeOfSum("dd","")); // Logs: "string"
console.log(typeOfSum(true, 1)); // Logs: "number"
console.log(typeOfSum("Hello", false)); // Logs: "string"
console.log(typeOfSum(null, 1));// Logs: "number"
console.log(typeOfSum(undefined, 5)); // Output: "number" (undefined results in NaN, which is a number)
*/

//sample 2

function typeOfSum(a, b) {
    let s;

    if (typeof a == 'number' && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && typeof b == 'number') {
        return 'string';
    }
    if (typeof a == 'number' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && typeof b == 'boolean') {
        return 'string';
    }
    if (a == null && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && b == null) {
        return 'string';
    }
    if (a == null && typeof b == typeof s) {
        return 'number';
    }
    if (typeof a == 'number' && b == typeof s) {
        return 'number';
    }
    if (typeof a == typeof s && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == typeof s && typeof b == 'boolean') {
        return 'number';
    }
    if (a == null && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && b == null) {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'number') {
        return 'number';
    }
    if (a == null && b == null) {
        return 'number';
    }
    if (typeof a == 'number' && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'number' && b == null) {
        return 'number';
    }
    if (typeof a == 'number' && b == typeof s) {
        return 'number';
    }
    if (a == null && typeof b == 'string') {
        return 'string';
    }
    if (a == typeof s && b == null) {
        return 'number';
    }
}