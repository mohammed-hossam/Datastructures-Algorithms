//* palindrome (aglortihms)
/* function palindrome(string) {
  var reg = /[\W_]/g;
  string = string.toLowerCase().replace(reg, '');
  console.log(string);
  for (let i = 0; i < string.length / 2; i++) {
    return !string[i] !== string[string.length - 1 - i];
  }
  return true;
}
palindrome('A man, a plan, a canal. Panama'); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* if given string has given letter more than one (aglortihms)
/* function count(string, letter) {
  console.log(string);
  let object = {};

  for (const val of string) {
    object[val] = object[val] ? object[val] + 1 : 1;
    if (object[letter] > 1) {
      return true;
    }
  }
  console.log(object);
  return false;
}
count('hello', 'l'); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//*if one number in a given array is a duplicate, find this number (aglortihms)

// function findDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {}

//   let count;
//   let duplicate;

//   for (const value of arr) {
//     duplicate = value;
//   }
// }
// const firstDuplicate = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.lastIndexOf(arr[i]) !== i) {
//       return i;
//     }
//   }
//   return -1;
// };
// // debugger;
// firstDuplicate([0, 1, 2, 3, 4, 4, 5]); // 4s

//*traverse dom (given two identical tree structure A and B  and a node from treeA, find the coressponding node in treeB)

/* const rootA = document.querySelector('#rootA');
const rootB = document.querySelector('#rootB');
const targetNodeA = document.querySelector('#target-nodeA');

function findSymmetricNode(rootA, rootB, targetNodeA) {
  let node = targetNodeA;
  const path = [];
  while (node !== rootA) {
    const parent = node.parentNode; //or parent.parentElement
    const childrens = Array.from(parent.childNodes); //or parent.children
    const index = childrens.indexOf(node);
    path.unshift(index);
    node = parent;
  }
  console.log(path);

  let parent = rootB;
  for (let i = 0; i < path.length; i++) {
    console.log(parent);
    let childrens = parent.childNodes;
    let childNode = childrens[path[i]];
    parent = childNode;
  }
  console.log(parent);

  return parent;
}

findSymmetricNode(rootA, rootB, targetNodeA); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//*give same answer using one single line of code (destructing of arrays)
/* var arr = [1, [[2]], [3, [[4]]]];

var a = arr[0];
var b = arr[1][0][0];
var c = arr[2][0];
var d = arr[2][1][0][0];
console.log(a, b, c, d);

var [a, [[b]], [c, [[d]]]] = arr;
console.log(a, b, c, d); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* make this code works (prototype)
// console.log('hello geeksfromgeeks'.toCaptitalCase()); //error

/* String.prototype.toCaptitalCase = function () {
  return this.split(' ')
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    })
    .join(' ');
};
console.log('hello geeksfromgeeks'.toCaptitalCase()); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* make this function to get this answers(closures):

//? version 1
/* var addTen = dynamicAdder(10);
console.log(addTen(5)); //15
console.log(addTen(10)); //20
var addhundred = dynamicAdder(100);
console.log(addhundred(5)); //105
console.log(addhundred(10)); //110

function dynamicAdder(num1) {
  return function (num2) {
    return num2 + num1;
  };
} */

//? version 2
/* var addTen = dynamicAdder(10);
console.log(addTen(5)); //15
console.log(addTen(10)); //25

function dynamicAdder(num1) {
  let lastSum = num1;

  return function (num2) {
    lastSum = lastSum + num2;

    return lastSum;
  };
} */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */
