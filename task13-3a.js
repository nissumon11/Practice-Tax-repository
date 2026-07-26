// Input: a number
// Output: product of its digits
// Returns: a number

//function productOfDigits(num) {
//let str = num.toString();
//let total = 1;
// TODO: loop through each character, convert to number, and multiply

//return total;
//}

//console.log(productOfDigits(123));  // Expected: 6
//console.log(productOfDigits(4040)); // Expected: 0

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;

  for (let digit of str) {
    total *= Number(digit);
  }

  return total;
}

console.log(productOfDigits(123));
console.log(productOfDigits(4040));
