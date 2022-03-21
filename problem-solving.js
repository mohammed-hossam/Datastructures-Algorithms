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
