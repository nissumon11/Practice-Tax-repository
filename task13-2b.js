// Input: a number
// Output: the number with digits reversed
// Returns: a number

//function reverseNumber(num) {
// let str = num.toString();
// TODO: build the reversed string, then convert back to a number

//}

//console.log(reverseNumber(1234)); // Expected: 4321
//console.log(reverseNumber(7));    // Expected: 7

function reverseNumber(num) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");

  return Number(reversed);
}
console.log(reverseNumber(1234));
console.log(reverseNumber(7));
