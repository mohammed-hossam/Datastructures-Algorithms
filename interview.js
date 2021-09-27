/* -------------------------------------------------------------------------- */
/*                                   reverse                                  */
/* -------------------------------------------------------------------------- */

//* Reverse: Mysolution
// const string = 'welcome';
// console.log(string.concat(6, 7));

/* function reverse(word) {
     let reversed = '';
     for (let i = 0; i < word.length; i++) {
          reversed = reversed.concat(
               word.slice(word.length - i - 1, word.length - i)
               );
  }
  console.log(reversed);
}
reverse('hello'); */

//* Reverse: gridersolution1:
/* function reverse(word) {
  let reversed = '';
  for (character of word) {
    reversed = reversed + character;
  }
  console.log(reversed);
}
reverse('welcome'); */

//* Reverse: gridersolution2:
/* function reverse(word) {
  const array = word.split('').reverse().join('');
  console.log(array);
}
reverse('welcome'); */

//* Reverse: gridersolution3:
/* function reverse(word) {
  const array = word.split('').reduce((returnedValue, el) => {
    return el + returnedValue;
  }, '');
  console.log(array);
}
reverse('welcome'); */

/* -------------------------------------------------------------------------- */
/*                                 palindrome                                 */
/* -------------------------------------------------------------------------- */

// function palindrome(word) {
//      const reversedString = word.split('').reverse().join('');

//      return reversedString === word;
//    }

//    palindrome('abba');

/* -------------------------------------------------------------------------- */
/*                                 reverseInt                                 */
/* -------------------------------------------------------------------------- */

/* function reverseInt(number) {
  const reversedNumber =
    parseInt(number.toString().split('').reverse().join('')) *
    Math.sign(number);

  console.log(reversedNumber);
}
reverseInt(-2500); */

/* -------------------------------------------------------------------------- */
/*                                  Max chars                                 */
/* -------------------------------------------------------------------------- */
//kolha 2fkar 3n el Frequency Counter patern.
// does strng A have the same chars as string B (is it an anagram)?
//does the gicen string have any repeated chars?
// given a string, return the char that is most commonly used in the string.

/* function maxChar(str) {
  let obj = {};

  for (const val of str) {
    obj[val] = obj[val] + 1 || 1;
  }

  let maxValue = 0;
  let maxChar = '';

  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

maxChar('abccccccd');
maxChar('apple 12311112'); */

/* -------------------------------------------------------------------------- */
/*                                  fizzBuzz                                  */
/* -------------------------------------------------------------------------- */
//Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

// el fkra hena fe ezay tshof el number division by 7aga ezay fl javasript (%)

/* for (let i = 1; i <= 100; i++) {
  const answer = function see() {
    if (i % 3 === 0) {
      return 'fizz';
    }
    if (i % 5 === 0) {
      return 'Buzz';
    }
    if (i % 5 === 0 && i % 3 === 0) {
      return 'fizz Buzz';
    }
    return i;
  };
  console.log(answer());
} */

/* function fizzBuzz(number) {
  let arr = [];

  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }
  return arr;
} */

/* -------------------------------------------------------------------------- */
/*                                 Array Chunk                                */
/* -------------------------------------------------------------------------- */

/* function chunk(arr, size) {
  let ans = [];

  for (let i = 0; i < arr.length; i = i + size) {
    ans.push(arr.slice(i, i + size));
  }
  return ans;
}
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);  */

/* 
function chunk(array, size) {
	let ans = []
	while(array.length) ans.push(array.splice(0,size))
	return ans
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); */

/* -------------------------------------------------------------------------- */
/*                               Capitalization                               */
/* -------------------------------------------------------------------------- */

// solution1:

/* function capitalize(str) {
  const arr = str.split(' ');

  const modefiedArray = arr.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });

  return modefiedArray.join(' ');
}

capitalize('hey how are you'); */

// solution2:
/* function capitalize(str) {
  let result = str[0].toUpperCase();

  for (i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  console.log(result);
}

capitalize('hey how are you'); */

/* -------------------------------------------------------------------------- */
/*                             The Steps Question                             */
/* -------------------------------------------------------------------------- */

// my solution:
/* function Steps(n) {
  let fillArray = ['#'];

  let spaceArray = [];
  for (let i = 1; i < n; i++) {
    spaceArray.push(' ');
  }

  for (let i = 1; i <= n; i++) {
    console.log(`'${fillArray.join('') + spaceArray.join('')}'`);
    fillArray.push('#');
    spaceArray.pop(' ');
  }
}

Steps(4); */

// girder solution1:
//howa hena hyt3aml eno y2sm ela rows w columns w yshof pattern mo3yn y3tmd 3ala el rows wl columns yzwd 3ala 2saso el space wl #. (ele hwa hena hykon 3dd el columns 2ql mn 3dd el rows s3tha hykon el # mwgoda).

/* function steps(n) {
  for (let r = 0; r < n; r++) {
    let row = '';

    for (let c = 0; c < n; c++) {
      if (c <= r) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

steps(4); */

/* -------------------------------------------------------------------------- */
/*                                  pyramids                                  */
/* -------------------------------------------------------------------------- */

// 3dd el columns el mtlob hykon=> n+n-1=2n-1
/* el shart ele hn7ot 3ala 2saso # hena hykon en el columns deh tq3 ben
 midpoint+rowNum and midpoint-rowNum */

/* function pyramid(n) {
  let midpoint = Math.ceil((2 * n - 1) / 2);

  for (let r = 1; r <= n; r++) {
    let level = '';

    for (let c = 1; c <= 2 * n - 1; c++) {
      if (c < midpoint + r && c > midpoint - r) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

pyramid(4); */

/* -------------------------------------------------------------------------- */
/*                               find the vowels                              */
/* -------------------------------------------------------------------------- */

// solution1
/* function countVowel(str) {
  let vowels = ['a', 'o', 'u', 'i', 'e'];
  
  let obj = {};
  for (const val of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[val] = obj[val] + 1 || 1;
  }
  
  let counter = 0;
  
  for (const key in obj) {
    vowels.includes(key) ? (counter += obj[key]) : null;
  }
  
  console.log(counter);
}

countVowel('why do you ask'); */

// solution2:
/* function countVowel(str) {
  const array = str.match(/['aouie']/gi);
  console.log(array);
  return array ? array.length : 0;
}

countVowel('why do you ask'); */

/* -------------------------------------------------------------------------- */
/*                                spiral matrix                               */
/* -------------------------------------------------------------------------- */

/* function matrix(n) {
  // hena hn7t el arrays bta3t e matrix ele 3yznha fadya el 2wel
  let results = [];
  for (i = 1; i <= n; i++) {
    results.push([]);
  }
  console.log(results);

  // hena hnbd2 nmla el matrix 3n re2 t2sem rows w columns
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let counter = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //  fisrt row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // last column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //last row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(results);
}

matrix(4); */

/* -------------------------------------------------------------------------- */
/*                                  fibonacci                                 */
/* -------------------------------------------------------------------------- */

// iterativeSolution:
/* function fib(n) {
  let fib = [0, 1];

  for (let i = 1; i <= n - 1; i++) {
    let ans = fib[i] + fib[i - 1];
    fib.push(ans);
  }
  console.log(fib[n - 1]);
}
fib(9); */

// recursive soltuion:
// time complexity=> 2^n w dah 2w7sh 7aga wl 7al 3shan 2qll el time  ene 23ml ll solution dah memoization
/* function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
} */

// memoization solution:
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib(7));
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    console.log(cache[args]);
    return result;
  };
}
