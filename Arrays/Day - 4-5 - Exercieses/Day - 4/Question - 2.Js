// Leet code Question 4. - Given two sorted arrays num1 and num2 of size m and n respectively, return the median of the two sorted arrays.

/* Example - Input: num1 = [1,3], num2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2. */

var findMedian = function (a1, a2) {
  let array = [...a1, ...a2];
  array.sort((a, b) => a - b);
  let median = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    return array[median];
  } else if (array.length % 2 === 0) {
    return (array[median - 1] + array[median]) / 2;
  }
};

console.log(findMedian([1, 3], [2, 7]));
console.log(findMedian([1, 3], [2]));

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/*
Test Case - 1:

a1 = [1, 3]
a2 = [2, 7]

step 1: Calling the Function findMedian(a1, a2)

step 2: concatenating both the arrays
    array = [...a1, ...a2] → array = [1, 3, 2, 7]

step 3: sorting the array with sort() method
    array.sort((a,b) => a-b) → array = [1, 2, 3, 7]

step 4: once the array is sorted we calculate the median.
    median = Math.floor(array.length / 2); →
    median = Math.floor(4 / 2) = 2;

step 5: now depending on the array length being Even or Edd we will enter the 'if else-if' conditions.

    condition step - 1: (array.length % 2 !== 0) → 2 % 2 !== 0 → false
    condition step - 2: (array.length % 2 === 0) → 2 % 2 === 0 → true
    condition step - 3: now we'll enter the else-if block
        return (array[median - 1] + array[median]) / 2 →
            (array[2-1 + array[2]]) / 2 → 
            (2 + 3) / 2 →
            5 / 2 = return  2.5 // Which will also be our final result.

Test case - 2:

a1 = [1, 3]
a2 = [2]

step 1: Calling the function findMedian(a1, a2)

step 2: concatenating both the arrays
    array = [...a1, ...a2] → array = [1, 3, 2] 

step 3: sorting the array with sort() method
    array.sort((a,b) => a-b) → array = [1, 2, 3]

    step 4: once the array is sorted we calculate the median.
    median = Math.floor(array.length / 2); →
    median = Math.floor(3 / 2) = 1.5 → since Math.floor() is used 1.5 → 1

    step 5: now depending on the array length being Even or Edd we will enter the 'if else-if' conditions.

    condition step - 1: (array.length % 2 !== 0) → 3 % 2 !== 0 → true
    condition step - 2: now we'll enter the if block
        return array[median] →
        return array[1] →
        return 2 // Which will also be our final result.
 */
