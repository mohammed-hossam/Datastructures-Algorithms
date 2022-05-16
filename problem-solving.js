//* example 1
// function filterLongWords(sentence, n) {
//   const x = sentence.split(' ');
//   console.log(x);
//   return x.filter((el) => {
//     return el.length > n;
//   });
// }
// console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4));
/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* example 2
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_root(num) {
//   const arr = num.toString().split('');
//   if (arr.length === 1) {
//     return num;
//   }

//   const sum = arr.reduce((pre, cur) => {
//     return Number(pre) + Number(cur);
//   });

//   return digital_root(sum);
// }
// console.log(digital_root(132189));
/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* example 3
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//solution1 (myown)
// function uniqueInOrder(strOrArr) {
//   const arr = typeof strOrArr === 'string' ? strOrArr.split('') : strOrArr;
//   return arr.filter((el, i) => {
//     return el !== arr[i - 1];
//   });
// }

//solution2
// function uniqueInOrder(strOrArr) {
//   return [].filter.call(strOrArr, function (a, i) {
//     return strOrArr[i - 1] !== a;
//   });
// }

//solution3(my favorite)
// function uniqueInOrder(strOrArr) {
//   return [...strOrArr].filter((a, i) => a !== strOrArr[i - 1]);
// }
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
// function plusMinus(arr) {
//   // Write your code here
//   const length = arr.length;

//   let pos = 0;
//   let neg = 0;
//   let zer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     switch (true) {
//       case el > 0:
//         pos++;
//         break;
//       case el < 0:
//         neg++;
//         break;
//       case el === 0:
//         zer++;
//         break;
//     }
//   }

//   console.log(pos / length);
//   console.log(neg / length);
//   console.log(zer / length);
// }

// console.log(plusMinus([1, 1, 0, -1, -1]));

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr=[1,3,5,7,9]
// The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5++7+9=24. The function prints: 16 24

function miniMaxSum(arr) {
  let min;
  let max;
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
