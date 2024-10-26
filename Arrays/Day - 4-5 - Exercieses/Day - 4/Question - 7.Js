// Find the Second Largest Element in the Array.

let a1 = [10, 200, 30, 14, 35];
let max = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < a1.length; i++) {
  if (a1[i] > max) {
    secondLargest = max;
    max = a1[i];
  } else if (a1[i] > secondLargest && a1[i] != max) {
    secondLargest = a1[i];
  }
}

console.log(secondLargest);

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/* 
Loop Iteration 1 : 
    step 1 : i = 0
    step 2 : 0 < 5 true
    step 3 :
    a1[0] (10) > -Infinity => true
    second = -Infinity
    max =  10
    step 4 : i ++ → 1

Loop Iteration 2 : 
    step 2 : 1 < 5 true 
    step 3 :  
    a1[i] (200) > max (10) true
    second = 10
    max = 200
    step 4 : i++ = 2
        
Loop Iteration 3 
    step 2 : 2 < 5 true 
    step 3 : 
    a1[2] (30) > max (200)  false
    else if : 30 > 10 && 30 != 200 true && true => true
    second = 30
    step 4 : i ++ → 3

Loop Iteration 4 : 
    step 2 : 3 < 5 true 
    step 3 : 
    a1[3] (14) > max (200) false
    else if : 14 >30 && 14 != 200 false && true => false 
    step 4 : i++ → 4

    Loop Iteration 5 : 
    step 2 : 4 < 5 true
    step 3 : 
    a1[4] 35 > max (200) false        
    else if : 35 > 30 && 35 != 200  true && true => true
    second = 35
    step 4 : i++ => 5

Loop Iteration 6  :
    step 2 : 5 < 5 false
        exit the loop
        
Final Answer = 35
 */
