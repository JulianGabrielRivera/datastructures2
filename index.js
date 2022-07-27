// function validAnagram(string1, string2) {
//   // add whatever parameters you deem necessary - good luck!
//   const stringObjectOne = {};

//   for (let i = 0; i < string1.length; i++) {
//     let letter = string1[i];
//     stringObjectOne[letter]
//       ? (stringObjectOne[letter] += 1)
//       : (stringObjectOne[letter] = 1);
//   }

//   for (let i = 0; i<string2.length; i++) {
//     let letter = string2[i];
//     if (!stringObjectOne[letter]) {
//       return false;
//     } else {
//       stringObjectOne[letter] -= 1;
//     }
//   }
//   return true;
//   console.log(stringObjectOne);
// }
// console.log(validAnagram('hello', 'hellotwo'));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

function count(array) {
  let first = array[0];
  let second = array[1];

  for (let i = 0; i < array.length; i++) {
    if (first === second) {
      second++;
    } else {
      first++;
    }
  }
}

// Multiple pointers

let arr = [1, 2, 3, 4, 5, 6, 5, 5, 5, 6];

function uniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

function maxSubarraySum(arr, num) {
  let maxNum = 0;

  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxNum += arr[i];

    let p1 = 0;
    let p2 = num;
    let tempSum = maxSum;
  }
  while (p2 < arr.length) {
    maxNum = tempSum - arr[p1] + arr[p2];
    if (tempSum > maxSum) {
      maxSum = tempSum;
      p1++;
      p2++;
    }
  }
  return maxSum;
}

// Linear Search Time Complexity O(N)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return 1;
    }
  }
  return -1;
}
// Refactor

// Binary Search Time Complexity Log(N) = Divide and Conquer algorithm

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min / max / 2);
    // let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// example of recursion
function countMeDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
    //  we need the return else it would keep going.
  }
  console.log(num);
  num--;
  countMeDown(num);
}

// print 3, then num is now 2 so countDown(2) and so on.

countMeDown(3);

// second recursive function

// base case is the end point it is the conditional
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
  // our recursive call
}
sumRange(4);

// so this goes and returns line 147, 3 then 2 then 1 which = 6 then when it gets to 1 it returns the final value of 4+6 = 10

// last recursive example, factorial iteratively 4! = 4 * 3 * 2 * 1

// non recursive way
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// recursive way

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);
// this comes out to 120, everything goes in a callstack then works backwards to get the value of each call.

// where things cna go wrong -- no base case/forgetting to return / stack overflow!
// maximum call stack exceeded = recursion not stopping

// helper metho recursion:

function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);
  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// strings are immutable so use methods like slice, substr, or substring to make copies of strings

// to make copies of objects use object.assign, or spread operator.

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  while (arr[middle] !== elem && start <= end) {
    console.log(start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
  //   return arr[middle] === elem ? middle : -1;
}
binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
// Binary search solution - good for sorted arrays otherwise sucks

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
      // if there is a match we dont break out and we keep comparing the short string.
      if (short[j] !== long[i + j]) {
        console.log('break!');
        break;
      }
      if (j === short.length - 1) {
        console.log('found one!');
        count++;
      }
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');

//  this is bubble sort and it works but its not optimized
function bubbleSort(arr) {
  //  the problem with doing it like this it goes too far, it hits end of loop and then compares one more time but its not there
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 2] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([37, 45, 29, 8]);
// optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  // doesnt do unnecessary sorts
  // this way we no longer have to sort undefined because of -1
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 2] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([37, 45, 29, 8]);

// linear sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log('**********');
      console.log(arr);
      console.log('swapping to:');
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
      console.log('**********');
    }
  }
  return arr;
}
selectionSort([34, 22, 10, 19, 17]);

// Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}
// testing again
insertionSort([2, 1, 9, 76, 4]);
