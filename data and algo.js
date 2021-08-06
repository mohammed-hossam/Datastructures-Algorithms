/* -------------------------------------------------------------------------- */
/*                          Frequency Counter patern                          */
/* -------------------------------------------------------------------------- */
//ANCHOR Frequency Counter patern

// write function return true if second string is an anagram of the first. Anagram is a word by rearranging the letters of another suchas cinema and iceman.note(without using nested loops dueto o(n*2) in nestedloops)

/* function Anagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  //2wel 7aga n3ml 2 objects
  let obj1 = {};
  let obj2 = {};
  // b3d kda n iterate 3ala kol input w nd5lo fel obejct ele 3mlna m3 wd3 3dd kol 7aga fl input
  for (const val of word1) {
    obj1[val] = obj1[val] ? obj1[val] + 1 : 1;
    // or
    // obj1[val] = obj1[val] || 0 + 1;
  }
  for (const val of word2) {
    obj2[val] = obj2[val] ? obj2[val] + 1 : 1;
  }
  console.log(obj1);
  console.log(obj2);

  //b3d kda nqarn lw el keys mwgoda fl etnan objets w lw nfs el 3add lw msh kda false


  for (const key in obj1) {
    // (1) lw el keys mwgoda fl etnan
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    // or
    // if(!key in obj2){return false}

    // (2) lw nfs el 3add
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

Anagram('cinema', 'iceman'); */

/* -------------------------------------------------------------------------- */
/*                          Multiple Pointers Pattern                         */
/* -------------------------------------------------------------------------- */
// ANCHOR  Multiple Pointers Pattern

// wrtie funtion called sumZero which accepts a sorted array of string [-4,-3,-2,-1,0,1,2,3,10] .the function should find the first pair where the sum = 0. return an array that has both values that sum to 0 or undefined if paired doesnt exist.(withot using nested loops due to dueto o(n*2) in nestedloops)

/* function sumZero(arr) {
  //3shan mn3mlsh nested loops hn7awel nsht8l 3ala el index bta3t el array

  // lt7ded el indexs
  let left = 0;
  let right = arr.length - 1; //3mlna hena -1 3han hnst5dmo b7es ykon index wl index byt7sb mn zero

  //hena hnsht8l bwhile loop 3ala el index w dah hyde O(n) time complixity
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    }
    left++;
  }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); */

// lw 3nde array mn numbers w 3yz 2shof lw 2ktr mn rqm mktrr wara b3d 2shelhom ([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
/* 
function countUniqueValues(arr) {
  let left = 0;
  let after;
  let before;
  let counter = 0;
  while (left < arr.length) {
    after = left + 1;
    before = left - 1;

    if (arr[left] !== arr[after]) {
      if (arr[left] !== arr[before]) {
        counter++;
      }
      left++;
    } else if (arr[left] === arr[after]) {
      left++;
    }
  }
  console.log(counter);
}
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); */

// implement a function called countUniqueValues which accepts a sorted array,and counts the unique values in the array.there can be negative numbers in the array, but it will awlys be sorted.(video 10 ps Patterns)

/* function countUniqueValues(arr) {
  //hn7awel hena nst5dm el array nfsha b7es enana nshel el arqam el moqrra we7na mshyen fl array wl ba2ey yb2a el unique values 
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
}
countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]); */

/* -------------------------------------------------------------------------- */
/*                               slideing window                              */
/* -------------------------------------------------------------------------- */
// ANCHOR slideing window

// write a funtion called maxSubarraySum which accepts an array of intgers and a number called n. the function shoud calculate the maximum sum of n consecutive elements in the array.

// nested loop solutoin:
/* function maxSubarraySum(arr, n) {
  // if the input array is invalid
  if (n > arr.length) {
    return null;
  }
  
  let max = 0;
  for (i = 0; i < arr.length - n - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    for (j = 1; j < n - 1; j++) {
      sum = sum + arr[i + j + 1];
    }
    if (max < sum) {
      max = sum;
    }
  }

  console.log(max);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 2); */

//without nested loop(sliding pattern):
/* function maxSubarraySum(arr, n) {
  // if the input array is invalid
  if (n > arr.length) {
    return null;
  }

  //hena bn3ml el gm3 el 2wal
  let sum = 0;
  let maxSum = 0;
  for (i = 0; i < n; i++) {
    sum += arr[i];
  }

  //hena bn3ml el sliding
  for (j = 0; j < arr.length - n - 1; j++) {
    //sliding
    sum = sum - arr[j] + arr[j + n];
    //put the maxSum
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  console.log(maxSum);
}
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); */

// edabit challenge
// Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.

/* function windowMaxes(array, n) {
  let max = [];

  for (i = 0; i < array.length - n + 1; i++) {
    let testMax = array.slice(i, i + n);

    // to get max number 3 ways:

    max.push(Math.max(...testMax));
    // or
    //   let maxim = testMax[0];
    //   for (let val of testMax) {
    //     if (val > maxim) {
    //       maxim = val;
    //     }
    //   }
    //   max.push(maxim);
    // or
    // max.push(testMax.reduce((max, val) => (max > val ? max : val)));
  }

  console.log(max);
}
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3); */

/* -------------------------------------------------------------------------- */
/*                             divide and conquer                             */
/* -------------------------------------------------------------------------- */
// ANCHOR  divide and conquer

// this pattern invovles dividing a dataset into smaller chunks and then repeating a process with a subset of data

// Given a sorted array of intgers, write a fuction called search, that accepts a value and returns the index where the value passed to the function is located. if the value is notfound return -1.

// solution 1:
//dah el7al el 3ady bl forloop w byosma linear search w dah time compleixty O(n)
/* function search(arr, n) {
  for (let i = 0; i < array.length; i++) {
    if (n === arr[i]) {
      return i;
    }
  }
  return -1;
}
search([1, 2, 3, 4, 5, 6, 7], 4); */

// solution 2:
//el 7al el tany ele 3yzeno bysoma binary search w bykon time complexity O(log(n))
// el fkra hena en lw 3ndana sorted array kbera w 3yz 2dwr feha 3ala 7aga mo3yna, bdl m3od 2dwr 3ala element element feha moomkn 2a2smha 7etat , w 2shof lw 7eta mo3yna mot2kd en mfehash ele bdwr 3leh 2shelha w25osh 3ala 7eta tnya l7d mwsl l 7eta mn el array feha el element ele bdwr 3leh w 2shof feha.

/* function search(arr, n) {
  //hena hgeb 2wel el arr w 25rha b7es 2a2smha
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  //hena hbd2 el t2sem w hmshy t2sem nos nos fa2wel 7aga h2sm el array mn nosha
  while (minIndex <= maxIndex) {
    //t2sem nos el array
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);

    if (array[middleIndex] < n) {
      minIndex = middleIndex + 1;
    } else if (array[middleIndex] > n) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}
search([1, 2, 3, 4, 5, 6, 8, 9, 12, 15, 16, 29], 15); */

/* -------------------------------------------------------------------------- */
/*                                  recursion                                 */
/* -------------------------------------------------------------------------- */
// ANCHOR recursion
// helper method recursion:

/* function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    //modeify the outerScoperVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
} */

/* -------------------------------------------------------------------------- */
/*                             Searching algorithm                            */
/* -------------------------------------------------------------------------- */
// ANCHOR Searching

//*Linear search:
// notes:
// dah el algorithm el 3ady 5als ele hwa b5osh 3ala el elements ele 3nde wa7d wa7d w 2dwr. w dah most5dm fe built in functions zy: indexOf-includes-find-findIndex.

// time complexity:
// best=> O(1)
// avrg=> O(n)
// worst=> O(n)

// implementation:
/* function LinearSearch(arr, val) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
} */

//*binary search:(only for sorted data)
// notes:
//dah nfs fkrt divide and conquer yo3tbr.

// time complexity:
// best=> O(1)
// avrg=> O(log n)
// worst=> O(log n)

// implementation:

/* function BS(arr, val) {
  let beginning = 0;
  let end = arr.length - 1;
  let middle = Math.floor((beginning + end) / 2);
  while (val !== arr[middle] && beginning <= end) {
    if (val > arr[middle]) {
      beginning = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((beginning + end) / 2);
  }
  return val === arr[middle] ? middle : -1;
} */

//* Naive string search:
/* function naiveSearch(long, short) {
  let counter;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) counter++;
    }
    return counter;
  }
} */

/* -------------------------------------------------------------------------- */
/*                                 Bubble sort                                */
/* -------------------------------------------------------------------------- */
// ANCHOR Bubblesort
// hena bgm3 el kber w27to fl 25er w hakza fe loop
// tbd2 mn zero fl outer loop dyman
//* time complexity:
// worst case=>(lw el elements msh mtrtba 5ales)=>O(n^2)
// best case=>(lw el elements mtrtba w msh b3ml swap)(w deh ele b3ml 3shnha swap=true or false 3shan 25le ll function best case 2stfed mnha. w dah by7sl lma 2la2e en el loop el da5lya m3mltsh swap 5ales wala mara)=>O(n)
// space complexity= >O(1)

//* implementation:
/* function bubbleSort(arr) {
  let swap = false;
  //fl loop el 5argya ele ht7dd hn3ml el moqrna m3 kam rqm el mfrod tkon m3 kol el 2rqam ele fl array -1 3shan 25er wa7d fl array e mfrod m5dosh m3aya fl moqrna 3shan hwa 25er wa7d
  for (let i = 0; i < arr.length - 1; i++) {
    //hena fl loop el da5lya b7dd el rqm ele haqrno fl array hal hafdl 2qrno m3 kol el 2rqam ele fl array wala la2. el mfrod la2 3shan el 2rqam el kbera 3mala ttraqm 3nde fe 25er el array fa m3 kol loop 5argya(i)  fa hb2a mot2kd en 3nde fe 25er 5ana esht8lt 3leha en 3nde 2kbr 2rqam fa msh m7tag 23ed moqrna m3aha.
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }

  console.log(arr);
} */

// bubbleSort([3, 4, 9, 30, 8, 13, 7, 5, 9, 38, 46]);
// bubbleSort([1, 3, 4, 8, 13, 38, 46]);

/* -------------------------------------------------------------------------- */
/*                               Selection sort                               */
/* -------------------------------------------------------------------------- */
// ANCHOR selectionsort
//hena 3ks el bubble bgm3 el so8yr w7to fl 2wel.
// tbd2 mn i fl outer loop 3ady.
//hena ana 3yz 23od 2shof men el minimum fl loop el w7da el 5argya w fel loop el w7da 2tl3 mnha el min w dah ele 23ml beh swap makan el index ele sh8al 3leh.

//* time complexity:
// worst case=>O(n^2)
// best case=>O(n^2)
// el fr2 hena el moomkn nstfed beh benha w ben bubblsort hwa en hena mfesh swaps kteer.
// space complexity= >O(1)

//* implementation:
/* function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentMinIdx = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[currentMinIdx] > arr[j + 1]) {
        currentMinIdx = j + 1;
      }
    }

    if (i !== currentMinIdx) {
      [arr[i], arr[currentMinIdx]] = [arr[currentMinIdx], arr[i]];
    }
  }
  console.log(arr);
} */

// selectionSort([3, 4, 9, 30, 8, 13, 7, 5, 9, 38, 46]);
// selectionSort([4, 3, 9, 30, 8, 13, 7, 5, 9, 38, 46, 7, 50]);

/* -------------------------------------------------------------------------- */
/*                               Insertion sort                               */
/* -------------------------------------------------------------------------- */
// ANCHOR insertionsort
// tbd2 mn tany element fl array fel outer loop w b3d kda 2qarn bele 2lbo w b3d kda 2zwd fl outer loop wbd2 bl talet w 2qarn bkol ele 2blo w hakza.
//mn esmha kda heya 2fdl 2st5dam leha lw b3ml insertion l rqm msln mo3yn l array ; 3shan heya bt7afz 3al agmb fl 2rray sorted w htshof el rmq el gded dah ht7to fan bzbt.

//* time complexity:
// worst case=>O(n^2)
// best case=>O(n)(lw el array totaly or nearly sorted)
// space complexity= >O(1)

//* implementation:
/* function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentNode = arr[i];
    for (let j = 1; j <= i && currentNode < arr[i - j]; j++) {
      [arr[i + 1 - j], arr[i - j]] = [arr[i - j], arr[i + 1 - j]];
    }
  }
  console.log(arr);
} */

// insertionSort([3, 4, 9, 30, 8, 13, 7, 5, 9, 38, 46]);
// insertionSort([4, 3, 9, 30, 8, 13, 7, 5, 9, 38, 46, 7, 50]);

/* -------------------------------------------------------------------------- */
/*                                 Merge Sort                                 */
/* -------------------------------------------------------------------------- */

//* time complexity:
//for spliting(divide and conquer)=>O(log n)
//for merge function time=>O(n+m) =O(n)
// worst case=>O(n log n)
// best case=>O(n log n)
// space complexity= >O(n)

//* implementation:
/* function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let newArray = [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] > arr2[pointer2]) {
      newArray.push(arr2[pointer2]);
      pointer2++;
    } else {
      newArray.push(arr1[pointer1]);
      pointer1++;
    }
  }
  while (pointer1 < arr1.length) {
    newArray.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < arr2.length) {
    newArray.push(arr2[pointer2]);
    pointer2++;
  }
  return newArray;
} */
// merge([1, 10, 50], [2, 14, 99, 100]);
// debugger;
// mergeSort([1, 10, 50, 2, 14, 99, 100]);
// ANCHOR mergesort

/* -------------------------------------------------------------------------- */
/*                                 Quick Sort                                 */
/* -------------------------------------------------------------------------- */
// ANCHOR quicksort
//bt3tmd brdo 3ala fkrt el divide and conquer zy merge:

//* time complexity:
// worst case=>O(n^2)(lma tkon sorted 2sln)
// best case=>O(n log n)
// space complexity= >O(log n)

//* implementation:
/* function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let swapIdx = pivot(arr, left, right);
    //left
    quickSort(arr, left, swapIdx - 1);
    //right
    quickSort(arr, swapIdx + 1, right);
  }
  return;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  return swapIdx;
}
 */
// pivot([4, 8, 2, 1, 5, 7, 6, 3]);
// quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

/* -------------------------------------------------------------------------- */
/*                                 Radix sort                                 */
/* -------------------------------------------------------------------------- */
// ANCHOR radixsort

//kol el sorts ele fo2 t7t mosma comparision sorting 3shan feha dyman moqrna ban el 2rqam. enma hena fel radix sort mfehash comparisions w btsht8l 3ala numbers bs.heya bt3tmd 3ala fkrt en 7gm el rqm y3tmd 3ala 3add el digits ele feh(more digits means bigger number).
//how many times we needs to run it depends on the largest number of digits in all of the given numbers we have in the array.
//* time complexity:
// worst case=>O(n*m)
// best case=>O(n*m)
// space complexity= >O(n+m)

//* implementation:

/* function radixSort(arr) {
  let biggest = mostDigits(arr);
  for (let i = 0; i < biggest; i++) {
    let bucketArray = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      const num = getDigit(arr[j], i);
      // if (!(bucketArray[num] instanceof Array)) {
      //   bucketArray[num] = [];
      // }
      bucketArray[num].push(arr[j]);
    }
    // console.log(bucketArray);
    arr = [].concat(...bucketArray);
  }
  console.log(arr);
}
function getDigit(num, place) {
  //2wel 7aga hngeb el 10th bta3 el digit dah  y3ny lw 3nde msln 7329 rqm 9 hykon el 10^0 wl 2 10^1 wl 3 10^2 w hakza. w 3ala 7sb el place ele 3yzo h2sm el rqm 3ala el 10th place y3ny lw 3yz place 2 yb2a h2sm 3ala 10^2(w7na bd2en mnel zero). w b3d kda hgeb reminder el 2sma 3ala 10.
  let result = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  return result;
}
function numOfDigits(num) {
  if (num === 0) return 1;
  let result = Math.floor(Math.log10(Math.abs(num))) + 1;
  return result;
}
function mostDigits(arr) {
  let biggist = 0;
  arr.forEach((el) => {
    let result = numOfDigits(el);
    if (result > biggist) biggist = result;
  });
  return biggist;
} */

// radixSort([23, 345, 5467, 12, 2345, 9852]);

/* -------------------------------------------------------------------------- */
/*                              greedy algorithm                              */
/* -------------------------------------------------------------------------- */
// ANCHOR greedyalgorithm
//dah el algorithm fkrto ene 2a2sm el ms2ala ele 3nde l 7etat so8yra w kol 7eta 2geb feha el best solution 3ala 2sas en kda hb2a gebt el best solution ll ms2ala el kbera.dah hykon s7 bnsbt 90% lakn fe b3d el 7alat msh bytl3 el 7al el best.
//8alban leh 3laqa bl optimization wele hwa y3ny msa2el m7tag feha max 2w min.

//find minimum number of coins
/* function findMin(val) {
  const arr = [1, 5, 10, 25, 50, 100];
  let counter = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < val) {
      counter = counter + Math.floor(val / arr[i]);
      val = val % arr[i];
    }
  }
  console.log(c);
}

findMin(173); */

//Fractional Knapsack Problem(el 7ramy)(Fractional deh y3ny el weigths ele 3nde qabla ll t2sem)(feh no3 tany msh Fractional w dah msh byt7l bl greedyalgorithm )
//here we need min weight with max value.
function itemsOfMaxValue(capacity) {
  let weigths = [];
  let values = [];
  let units = [];
}

//* datastructure:

/* -------------------------------------------------------------------------- */
/*                             singly linked list                             */
/* -------------------------------------------------------------------------- */
// ANCHOR singlylinkedlist

//* tail vs without tail:
// https://softwareengineering.stackexchange.com/questions/301862/should-linked-lists-always-have-a-tail-pointer

/* Advantages:
Inserting at the end is O(1) instead of O(N).
If the list is a Doubly Linked List, then removing from the end is also O(1) instead of O(N.
Disadvantage:
Takes up a trivial amount of extra memory: 4-8 bytes.
The implementer has to keep track of the tail. */

/*You are correct, a tail pointer never hurts and can only help. However, there is a situation where one does not need a tail pointer at all.

If one is using a linked list to implement a stack, there is no need for a tail pointer because one can guarantee that all accesses, insertions, and removals occur at the head. That being said one might use a doubly-linked list with a tail pointer anyway because that is the standard implementation in a library or platform and memory is cheap, but one does not need it. */

/* I rarely use a tail pointer for linked lists and tend to use singly-linked lists more often where a stack-like push/pop pattern of insertion and removal (or just linear-time removal from the middle) suffices. It's because in my common use cases, the tail pointer is actually expensive, just as making the singly-linked list into a doubly-linked list is expensive.

Often my common case usage for a singly-linked list might store hundreds of thousands of linked lists which only contain a few list nodes each. I also generally don't use pointers for linked lists. I use indices into an array instead since the indices can be 32-bit, e.g., taking half the space of a 64-bit pointer. I also generally don't allocate list nodes one at a time and instead, again, just use a big array to store all the nodes and then use 32-bit indices to link the nodes together. */

//* time complexity:
// add to end (push) => O(1);
// add to beginning (unshift)  => O(1); 3ks el array lw 3mlt add fl 2wel h3ml shift ll indexs l element element
// remove from beginning (shift)=> O(1);
// remove from end (pop)=> O(n); 3shan m7ta el node el 2bl el 25era 3shan 25leha tail
// searching => O(n);
// access => O(n); 3ks el array fl mwdo3 dah O(1) 3shan leha indexs

//el 5lasa en singlylinkedlist 2fdl fl insertion wl deletion at the beginning mn el array bs lw mohm 3nde el random access yb2a 2fdl array

//* implementation:
/* class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log(this);
  }

  getLast() {
    let pointer = this.head.next;
    let data = null;
    while (pointer) {
      data = pointer;
      pointer = pointer.next;
    }
    return data;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let previous = this.head;
    let next = this.head.next;
    while (next?.next) {
      previous = next;
      next = next.next;
    }

    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return previous;
    }
    return next;
  }

  shift() {
    if (!this.head) {
      return;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unShift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      return this.head;
    }
    if (index > this.length || index < 0) {
      return null;
    }
    let wantedNode = this.head;
    for (let i = 0; i < index; i++) {
      wantedNode = wantedNode.next;
    }
    return wantedNode;
  }

  set(index, val) {
    let wantedNode = this.get(index);
    if (!wantedNode) {
      return false;
    }
    wantedNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.unShift(val);
    if (index === this.length - 1) return !!this.push(val);

    let newNode = new Node(val);
    let prevWantedNode = this.get(index - 1);
    newNode.next = prevWantedNode.next;
    prevWantedNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevWantedNode = this.get(index - 1);
    let removedNode = prevWantedNode.next;
    prevWantedNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let memo = new SinglyLinkedList(); */

// memo.push('hi');
// memo.push('there');
// memo.push('welcome');
// memo.push('end');
// memo.clear();
// memo.getLast();
// memo.pop();
// memo.pop();
// memo.pop();
// memo.pop();

/* -------------------------------------------------------------------------- */
/*                                   stacks                                   */
/* -------------------------------------------------------------------------- */
//ANCHOR stacks

//* notes:
// Lifo=> last in first out

// lw 3nde data kteer w m7tag lifo bs, msh m7tag 2st5dm array 3shan feha 7agat mlhash lazma kteer zy el indexs w kda msln; fa 27sn 2st5dm el tre2a eltnya more effetient

// where stacks are used:
// managing functions invocation
// undo/redo (crt+Z)
//Routing (history object) (el sfa7at ele enta zortha)

//* time complexity :
// insertion=>O(1)
// removal=>O(1)
// searching =>O(n)
// access=>O(n)

//* create stack with array :
// push+pop
// or
// unshift+shift (zy m2olna dol w7shen fl array 3shan m7tag 23ml reindex l kol el indexs ele mwgoda fl array)

//* create stack with singlyLinkedList :

// moomkn nst5dm pop w push bto3 singlyLinkedList bs el moshkla en pop kant bta5od O(n) fa 3shan kda el 2fdl hwa shift w unshift 3shan kano O(1).
//bs hena hn3mlhom mn el 2wal

/* class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  shift() {
    if (!this.first) {
      return;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return true;
  }
}

let memo = new Stack(); */

// memo.unshift(11);
// memo.unshift(22);
// memo.unshift(33);
// memo.unshift(44);

/* -------------------------------------------------------------------------- */
/*                                    Queue                                   */
/* -------------------------------------------------------------------------- */
// ANCHOR Queue
//* notes:
// fifo (first in first out)

//lw 3nde data kteer w m7tag fifo bs, msh m7tag 2st5dm array 3shan feha 7agat mlhash lazma kteer zy el indexs w kda msln; fa 27sn 2st5dm el tre2a eltnya more effetient.
//8er en 3ks el stack hena ana dyman m7tag 23ml reindexs 3shan bst5dm shift w unshift henak kont moomkn bst5dm push w pop.

//* time complexity :
// insertion=>O(1)
// removal=>O(1)
// searching =>O(n)
// access=>O(n)

//* building queue with array:
// push+shift
// or
//unshift+pop

//* create queue with singlyLinkedList:
//moomkn 23ml add to the beginning and remove from the end 2w el 3aks
//bs fl singlyLinkedList zy ma7na 3rfen en remove from the end bt7tag 23de 3ala el nodes kolha 3shan 2geb el node 2bl el 25era w 25leha heya el tail fa el 2fdl ene 23ml add to the end and remove from the beginning.

/* class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  shift() {
    if (!this.first) {
      return;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return this.first;
  }
} */

/* -------------------------------------------------------------------------- */
/*                                    trees                                   */
/* -------------------------------------------------------------------------- */
// ANCHOR trees
//* notes:
// tree is a data structure that consists of nodes in a parent/child relationship.it should have one entry node only and it called the root.

//lists are linear but trees are non linear.lists are a special case of a tree.

// binary tree lazm ykon kol parent 3ndo msh 2ktr mn 2 children nodes.
// binary search tree nfs el binary tree el 3dya bs kaman lazm ykon kol node 3ala shmlha 7agat 2ql mnha w 3ala ymnha 2kbr mnha. w mn esmha 2fdl est5dam leha hwa lw 3yz data 23ml feha search wl data deh sorted.(23tqd 3shan el mwdo3 ashbh bfkrt divide and conquer)

//* time complexityfor BST:
// insertion=>O(log n)
// searching =>O(log n)
// worst case=> msh dyman feh 7ala shaza msln en lw el BST ele 3nde kolha 3ala n7yt el ymen 2w n7yt el shemal w msh mtwz3a fa kda hfdl 2bos 3ala node node tar2ebn s3tha hykon el searching O(n).

//* implementation:
/* class Node {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    var newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    var current = this.root;
    while (true) {
      if (val === current.val) return undefined;

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  isFound(val) {
    if (!this.root) return false;

    var current = this.root;
    while (true) {
      if (current.val === val) return true;
      if (current.val > val) {
        if (!current.left) return false;
        current = current.left;
      } else {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }

  // traversal grider zy bta3 colt: el w hwa en h3ml queue 3ala shkl array w tol ma heya mlyana htl3 mnha el first in w27ot el children bto3o fl queue ka last.
// el fr2 en bs grider kan 3ala tree 3dya enma colt 3ala BST wel fr2 en el goz2 ele ha5od feh el children bta3 kol node w 27to fl queue fl BST badal el children hashof lw feh left w right 27thom.
  BFS() {
    var queue = [this.root];
    var visited = [];
    var currentNode;

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  DFSPreOrder() {
    var data = [];
  }
} */

// let memo = new BST();
// memo.root = new Node();
// memo.insert(10);
// memo.insert(6);
// memo.insert(15);
// memo.insert(3);
// memo.insert(8);
// memo.insert(20);

/* -------------------------------------------------------------------------- */
/*                                binary heaps                                */
/* -------------------------------------------------------------------------- */
// ANCHOR binaryheaps
//* notes:
//el heaps deh no3 mn 2nwa3 el trees w feh mnha nfsha kaman 2ktr mn no3 bs e7na hena hntklm 3ala no3 wa7d esmo el binary heaps.w fe mnha no3en max w min.w heya bshkl 3am shbh gedan el BST w 3ndha brdo max 2 nodes mn kol parent.

//MaxBinaryHeap: parent nodes are always larger than child nodes.but there are no guarantees between sibling nodes
//MinBinaryHeap: parent nodes are always smaller than child nodes.but there are no guarantees between sibling nodes

//binary heap is compact as possible. All the children of each node are as full as they can be ,and left children are always filled out first

//* time complexityfor binaryheaps:
//insertion O(log n)
//removal O(log n)
//search O(n) (heya msh 27sn e5tyar ll searching el 2fdl BST)

//* implementation for MaxBinaryHeap using array:
//for any chid node at index n ,its parent at index (n-1)/2
//for any parent(element in the array) the left child at 2n+1 and right child at 2n+2
/* class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // el mfrod ene dyman 2bd2 lma 23ml insert bl n7ya el shemal w lma 23ml push ll arraya 3ady dah kda hwa ele byt3ml automatic
    this.values.push(val);
    if (this.values.length === 1) return this;
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let elementIdx = this.values.length - 1;
    while (true) {
      let parentidx =
        Math.floor((elementIdx - 1) / 2) >= 0
          ? Math.floor((elementIdx - 1) / 2)
          : 0;
      let parent = this.values[parentidx];
      let element = this.values[elementIdx];
      if (parent >= element) break;
      this.values[parentidx] = element;
      this.values[elementIdx] = parent;
      elementIdx = parentidx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let idx = 0;
    while (true) {
      let swap = null;
      let currentNode = this.values[idx];
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (leftChild) {
        if (leftChild > currentNode) swap = leftChildIdx;
      }
      if (rightChild) {
        if (
          (rightChild > currentNode && swap === null) ||
          (rightChild > leftChild && swap !== null)
        )
          swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = currentNode;
      idx = swap;
    }
  }
} */

// let memo = new MaxBinaryHeap();
// memo.insert(41);
// memo.insert(39);
// memo.insert(33);
// memo.insert(18);
// memo.insert(27);
// memo.insert(12);
// memo.insert(55);

//* Priority Queue implementation using MinBinaryHeap using nodes and array:
// el in wl max kol 7aga heya heya bzbt copy past mogrd bs h5le el moqrnat el 3aks
/* class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(val, priority) {
    const newNode = new Node(val, priority);
    // el mfrod ene dyman 2bd2 lma 23ml insert bl n7ya el shemal w lma 23ml push ll arraya 3ady dah kda hwa ele byt3ml automatic
    this.values.push(newNode);
    if (this.values.length === 1) return this;
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let elementIdx = this.values.length - 1;
    while (true) {
      let parentidx =
        Math.floor((elementIdx - 1) / 2) >= 0
          ? Math.floor((elementIdx - 1) / 2)
          : 0;
      let parent = this.values[parentidx];
      let element = this.values[elementIdx];
      if (parent.priority <= element.priority) break;
      this.values[parentidx] = element;
      this.values[elementIdx] = parent;
      elementIdx = parentidx;
    }
  }

  extractMinPriority() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }
  bubbleDown() {
    let idx = 0;
    while (true) {
      let swap = null;
      let currentNode = this.values[idx];
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (leftChild) {
        if (leftChild.priority < currentNode.priority) swap = leftChildIdx;
      }
      if (rightChild) {
        if (
          (rightChild.priority < currentNode.priority && swap === null) ||
          (rightChild.priority < leftChild.priority && swap !== null)
        )
          swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = currentNode;
      idx = swap;
    }
  }
} */

// let memo = new PriorityQueue();
// memo.insert('common cold', 4);
// memo.insert('gunshot wound', 1);
// memo.insert('high fever', 2);
// memo.insert('borken arm', 3);

/* -------------------------------------------------------------------------- */
/*                               Hash map/table                               */
/* -------------------------------------------------------------------------- */
// ANCHOR Hash map
//* Notes:
// they are used to store key-value pairs.
// they are like arrays but the keys are not ordered.
//js has objects and maps as builtin hash tables.(note: objects have some restrictions but are basically hash tables)

//* hash funtions:
//in order to lookup values by keys, we need o find a way to convert keys into valid array indices. A function that perfom this task called a hash function.
// hash function  takes any data like: pdf,image.video,string, and somehow spits out a Number.
//A hash function is any function that can be used to map data of arbitrary size to fixed-size values.
//A hash function is a function that transform a key to an adress(location).

//* what makes a good hash function :
//1) to be fast(constant time).
//2)collision=> Doesnt cluster outputs at specific indices, but distributes uniformally. y3ny msln balash n5tar en n7wl string l number 3n tre2 enana nshof el length bta3o l2n fe 2ktr mn klma leha nfs el length fa lw klma mkwna mn 4 7from kda klmat kter gedan ht3ml return 4.(8alban 7al el mwdo3 dah byd5ol feh prime numbers)
//3)determanistic.

//* time complexity(avrg case):
//2hm 3onsr mo2sr fl mwdo3 hwa el hash function w mada el distribution ele 3mla kol ma kan feh collisions kteer kol makan 2w7sh.
//insertion O(1)
//deletion O(1)
//access O(1)

//* implementaion:
//8alban 3shan n7l moshklt el collisions bykon leha 3laqa bl prime numbers.msh bs kda kaman lw mogrd bs 3mlt el array bta3ty b length prime number bdon est5dam el prime numbers fl 7al nfso, dah by2ll el collisions bshkl kbeer geddan fe 7ad zato.

/* function hash(key, arrLen) {
  let total = 0;
  let weirdPrime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key.charCodeAt(i) - 96;
    total = (total * weirdPrime + value) % arrLen;
  }
  console.log(total);
}

hash('red', 13);
hash('green', 13);

//collision:
hash('pink', 13); //5
hash('cyan', 13); //5 */

// handelling collision:
//1) seperate chaining. hena lw 7aga 3mlt collision 27thom fe array fe nfs el index.
//2) linear proping. hena lw 7aga 3mlt collision 2shof el index el fady ele b3do 2w ele 2blo 2oto feh bs deh tb3an kda ht5lene mrbot bsize el array 3ala 3ks el chaining ele bysm7 b collisions 2ktr.

/* class hashMap {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    } else {
      return;
    }
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!arr.includes(this.keyMap[i][j][1])) {
            arr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    console.log(arr);
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!arr.includes(this.keyMap[i][j][1])) {
            arr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    console.log(arr);
  }
} */

// const meme = new hashMap();

// meme.set('hello world', 'goodbye!!');
// meme.set('dogs', 'are cool');
// meme.set('cats', 'are fine');
// meme.set('i love', 'pizza');

/* -------------------------------------------------------------------------- */
/*                             Dynamic programming                            */
/* -------------------------------------------------------------------------- */
// ANCHOR dynamicprogramming

//el fkra hena ene 2a2sm el ms2ala ele 3nde l msa2el so8yra lakn bshrt en ntayg el msa2el el so8yra deh 2kon m7tgha tany b7es 2stfed mnha w 2st5dmha. w na5od balna ene ba2ol el ntayg msh el msa2el nfsha. y3ny lw 3nde  function btl3 ntega equal 2 w w7da tnya 3 wana h7tag 2 w 3 deh b3d kda tany kteer fa kda deh 7aga moomkn 2a2smha l msa2el so8yra el msa2el el so8yra deh 3obara 3n ms2ala btl3 2 w ms2ala tnya btl3 3 w 2stfed mnha fe 7al el ms2ala el kbera ele 3nde.

// el ms2ala el mshhora ele bayn feha gedan el fkra deh heya fibonacci seris(0,1,1,2,3,5)

// fibonacci seris:(time complexity=<O(2^n))
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
fib(5);
