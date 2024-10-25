// Leet Code Question 1. - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/* Example - Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var targetSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i !== j) {
        return [i, j];
      }
    }
  }
};

console.log(targetSum([2, 7, 11, 15], 9));
console.log(targetSum([1, 3, 2, 7], 5));

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/*
nums = [2, 7, 11, 15]
target = 9

Outer Loop (i = 0):
    - nums[i] = 2
    Inner Loop (j = 0):
        - nums[j] = 2
        - Check: 2 + 2 === 9 && 0 !== 0 => false
    Inner Loop (j = 1):
        - nums[j] = 7
        - Check: 2 + 7 === 9 && 0 !== 1 => true
        - Found a pair: return [0, 1]

Final result for the first test case: [0, 1]

----------------------------------

Test Case 2:
Initial state:
nums = [1, 3, 2, 7]
target = 5

Outer Loop (i = 0):
    - nums[i] = 1
    Inner Loop (j = 0):
        - nums[j] = 1
        - Check: 1 + 1 === 5 && 0 !== 0 => false
    Inner Loop (j = 1):
        - nums[j] = 3
        - Check: 1 + 3 === 5 && 0 !== 1 => false
    Inner Loop (j = 2):
        - nums[j] = 2
        - Check: 1 + 2 === 5 && 0 !== 2 => false

Outer Loop (i = 1):
    - nums[i] = 3
    Inner Loop (j = 0):
        - nums[j] = 1
        - Check: 2 + 1 === 5 && 0 !== 0 => false
    Inner Loop (j = 1):
        - nums[j] = 3
        - Check: 2 + 3 === 5 && 0 !== 1 => true
        - found a pair: return [0,1]

Final result for the second test case: [1, 0]
 */
