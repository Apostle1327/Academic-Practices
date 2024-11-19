// Detect Occurrence of Each number in the Array.
// Space Complexity : O(n)
// Time Complexity : O(n)

let a1 = [1, 1, 2, 3, 3, 3, 4, 5, 6];
let count = {}; // object => key - value
for (let i = 0; i < a1.length; i++) {
  if (!count[a1[i]]) {
    count[a1[i]] = 1;
  } else {
    count[a1[i]]++;
  }
}

for (let key in count) {
  console.log(key + " : " + count[key]);
}

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/* 
Loop Iteration 1 :

    step 1 : i = 0 
    step 2 : i < 9 → 0 < 9 true
    step 3 : 
    count[a1[0]] => count[1] => undefined => falsy => !falsy => true
    count[1] = 1
    step 4 : i++ → 1
                
Loop Iteration 2 :

    step 2 : 1 < 9 true
    step 3 : 
    count[a1[1]] => count[1] => true => !true => false              
    else 
    count[1]++    1++ => 2  
    step 4 : i++ → 2

Loop Iteration 3 :

    step 2 : 2 < 9 true
    step 3 :     
    count[a1[2]] => count[2] => undefined => falsy => !falsy => true
    count[2] = 1
    step 4 : i++ → 3   
            
Loop Iteration 4 :

    step 2 : 3 < 9 true
    step 3 :     
    count[a1[3]] => count[3] => undefined => falsy => !falsy => true
    count[3] = 1
    step 4 : i++ → 4  
            
Loop Iteration 5 :

    step 2 : 4 < 9 true
    step 3 : 
    count[a1[4]] => count[3] => true => !true => false
    else 
    count[3]++    1++ => 2  
    step 4 : i++ → 5
            
Loop Iteration 6 : 
    step 2 : 5 < 9 true
    step 3 : 
    count[a1[5]] => count[3] => true => !true => false                    
    else 
    count[3]++    1++ => 3
    step 4 : i++ → 6  
            
Loop Iteration 7 : 
    step 2 : 6 < 9 true
    step 3 :     
    count[a1[6]] => count[4] => undefined => falsy => !falsy => true
    count[4] = 1
    step 4 : i++ → 7
            
Loop Iteration 8 : 
    step 2 : 7 < 9 true
    step 3 :     
    count[a1[7]] => count[5] => undefined => falsy => !falsy => true
    count[5] = 1
    step 4 : i++ → 8
            
Loop Iteration 9 : 
    step 2 : 8 < 9 true
    step 3 :     
    count[a1[8]] => count[6] => undefined => falsy => !falsy => true
    count[6] = 1
    step 4 : i++ → 9

Loop Iteration 10 :
    step 2 : 9 < 9 false
    exit the loop  
 */
