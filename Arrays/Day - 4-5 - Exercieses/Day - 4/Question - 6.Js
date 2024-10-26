// Rotate elements of the Array by K Position.
// Space Complexity :
// Time Complexity :

let a1 = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 2;
let rotate = [];

for (let i = 0; i < a1.length; i++) {
  rotate[(i + k) % a1.length] = a1[i];
}

console.log(rotate);

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/* 
Loop Iteration 1 : 
    step 1 : i = 0
    step 2 : i < 8 true
    step 3 :
    2 % 8 => 2 
    rotate[2] = a1[0] 1
    step 4 : i++ → 1

Loop Iteration 2 : 
    step 2 : 1 < 8  true
    step 3 : 
    3 % 8 = 3
    rotate[3] = a1[1] 2      
    step 4 : i++ → 2

Loop Iteration 3 : 
    step 2 : 2 < 5 true
    step 3 : 
    4 % 8 => 4
    rotate[4] = a1[2]
    step 4 : i++ → 3

Loop Iteration 4 :
    step 2 : 3 < 5 true
    step 3 : 
    5 % 8 = 5
    rotate[5] = a1[3] 
    step 4 : i++ → 4

Loop Iteration 5 : 
    step 2 : 4 < 5 true
    step 3 : 
    6 % 8 => 6
    rotate[6] = a1[4]
    step 4 : i++ → 5

Loop Iteration 6 :
    step 2 : 5 < 8 true
    step 3 :
    7 % 8 => 7
    rotate[7] = a1[5]
    step 4 : i++ → 6

Loop Iteration 7 :
    step 2 : 6 < 8 true
    step 3 :
    8 % 8 => 0
    rotate[0] => a1[6]
    step 4 : i++ → 7

Loop Iteration 8 :
    step 2 : 7 < 8 true
    step 3 :
    9 % 8 => 1
    rotate[1] => a1[7]
    step 4 : i++ → 8

Loop Iteration 9 :
    step 2 : 8 < 8 false
        exiting the loop

final answer = a1[7, 8, 1, 2, 3, 4, 5, 6]

 */
