// Remove any and every duplicate elements found in and from an array.
// Time Complexity = O(n²)
// Space Complexity = 0(n)

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
let singular = [];
let singLength = 0;

for (let i = 0; i < a1.length; i++) {
  let available = false;
  for (let j = 0; j < singLength; j++) {
    if (a1[i] === singular[j]) {
      available = true;
      break;
    }
  }
  if (!available) {
    singular[singLength] = a1[i];
    singLength++;
  }
}

console.log(singular);

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/*
  let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
  let singular = [];
  let singLength = 0;

Loop Iteration - 1:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 0 / a1[0] = 12

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 0 → false.
              exit from the inner loop.
      
      step - 3
        singular[singLength] = a1[i] / singular[0] = 12 (a1[0])

      step - 4
        singLength++ = 0 + 1 = 1.

      step - 5
        i++ = 0 + 1 = 1

singular = [12]

Loop Iteration - 2:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 1 / a1[1] = 8

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 1 → true.
              a1[i] === singular[j] → 8 === 12 → false
          step - 3
              exit from the inner loop.
      
      step - 3
        singular[singLength] = a1[i] → singular[1] = 8 (a1[1])

      step - 4
        singLength++ = 1 + 1 = 2.

      step - 5
        i++ = 1 + 1 = 1

singular = [12, 8]

Loop Iteration - 3:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 2 / a1[2] = 15

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 2 → true.
              a1[i] === singular[j] → 15 === 12 → false
              j++
          step - 3
            j = 1
          step - 4
            j < signLength → 1 < 2 → true.
              a1[i] === singular[j] → 15 === 8 → false
          step - 5
            exit from inner loop.
      
      step - 3
        singular[singLength] = a1[i] → singular[2] = 15 (a1[2])

      step - 4
        singLength++ = 2 + 1 = 3.

      step - 5
        i++ = 2 + 1 = 3

singular = [12, 8, 15]

Loop Iteration - 4:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 3 / a1[3] = 12

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 3 → true.
              a1[i] === singular[j] → 12 === 12 → true
                available = true
                break (immediate exit from the loop)
      
      step - 3
        since available = true, there will be no pushing of elements in the singular array.

      step - 4
        singLength++ = 2 + 1 = 3. and no increment of singLength as well.

      step - 5
        i++ = 3 + 1 = 4

singular = [12, 8, 15] → array stays the same

Loop Iteration - 5:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 4 / a1[4] = 14

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 3 → true.
              a1[i] === singular[j] → 10 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 3 → true
              a1[i] === singular[j] → 10 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 3 → true
            a1[i] === singular[j] → 10 === 15 → false
          step - 7
            exit from the inner loop.
          
      
      step - 3
        singular[singLength] = a1[i] → singular[3] = 10 (a1[4])

      step - 4
        singLength++ = 3 + 1 = 4.

      step - 5
        i++ = 4 + 1 = 5

singular = [12, 8, 15, 10]

Loop Iteration - 6:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 5 / a1[5] = 11

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 4 → true.
              a1[i] === singular[j] → 11 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 4 → true
              a1[i] === singular[j] → 11 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 4 → true
            a1[i] === singular[j] → 11 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 4 → true
            a1[i] === singular[j] → 11 === 10 → false
          step - 9
            exiting from the inner loop.
          
      
      step - 3
        singular[singLength] = a1[i] → singular[4] = 11 (a1[5])

      step - 4
        singLength++ = 4 + 1 = 5.

      step - 5
        i++ = 5 + 1 = 6

singular = [12, 8, 15, 10, 11]

Loop Iteration - 7:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 6 / a1[6] = 15

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 5 → true.
              a1[i] === singular[j] → 15 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 5 → true
              a1[i] === singular[j] → 15 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 5 → true
            a1[i] === singular[j] → 15 === 15 → true
              available = true
                break (immediate exit from the loop)

      step - 3
        since available = true, there will be no pushing of elements in the singular array.

      step - 4
        singLength++ = 4 + 1 = 5. and no increment of singLength as well.

      step - 5
        i++ = 6 + 1 = 7

singular = [12, 8, 15, 10, 11] → array stays the same

Loop Iteration - 8:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 7 / a1[7] = 9

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 5 → true.
              a1[i] === singular[j] → 9 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 5 → true
              a1[i] === singular[j] → 9 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 5 → true
            a1[i] === singular[j] → 9 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 5 → true
            a1[i] === singular[j] → 9 === 10 → false
          step - 9
            j++ = 4
          step - 10
            j < singLength → 4 < 5 → true
            a1[i] === singular[j] → 9 === 11 → false
          step - 11
            exiting the inner loop.
          
      step - 3
        singular[singLength] = a1[i] → singular[5] = 9 (a1[7])

      step - 4
        singLength++ = 5 + 1 = 6.

      step - 5
        i++ = 7 + 1 = 8

singular = [12, 8, 15, 10, 11, 9]

Loop Iteration - 9:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 8 / a1[8] = 5

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 6 → true.
              a1[i] === singular[j] → 5 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 6 → true
              a1[i] === singular[j] → 5 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 6 → true
            a1[i] === singular[j] → 5 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 6 → true
            a1[i] === singular[j] → 5 === 10 → false
          step - 9
            j++ = 4
          step - 10
            j < singLength → 4 < 6 → true
            a1[i] === singular[j] → 5 === 11 → false
          step - 11
            j++ = 5
          step - 12
            j < singLength → 5 < 6 → true
            a1[i] === singular[j] → 5 === 9 → false
          step - 13
            exiting from the inner loop

            
          
      
      step - 3
        singular[singLength] = a1[i] → singular[6] = 5 (a1[8])

      step - 4
        singLength++ = 6 + 1 = 7.

      step - 5
        i++ = 8 + 1 = 9

singular = [12, 8, 15, 10, 11, 9, 5]

Loop Iteration - 10:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 9 / a1[9] = 10

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 7 → true.
              a1[i] === singular[j] → 10 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 7 → true
              a1[i] === singular[j] → 10 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 7 → true
            a1[i] === singular[j] → 10 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 7 → true
            a1[i] === singular[j] → 10 === 10 → true
            available = true
                break (immediate exit from the loop)

      step - 3
        since available = true, there will be no pushing of elements in the singular array.

      step - 4
        singLength++ = 6 + 1 = 7. and no increment of singLength as well.

      step - 5
        i++ = 9 + 1 = 10

singular = [12, 8, 15, 10, 11, 9, 5] → array stays the same

Loop Iteration - 11:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 10 / a1[10] = 8

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 7 → true.
              a1[i] === singular[j] → 8 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 7 → true
              a1[i] === singular[j] → 8 === 8 → true
              available = true
                break (immediate exit from the loop)

      step - 3
        since available = true, there will be no pushing of elements in the singular array.

      step - 4
        singLength++ = 6 + 1 = 7. and no increment of singLength as well.

      step - 5
        i++ = 10 + 1 = 11

singular = [12, 8, 15, 10, 11, 9, 5] → array stays the same

Loop Iteration - 12:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 11 / a1[11] = 7

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 7 → true.
              a1[i] === singular[j] → 7 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 7 → true
              a1[i] === singular[j] → 7 === 8 → false
          step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 7 → true
            a1[i] === singular[j] → 7 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 7 → true
            a1[i] === singular[j] → 7 === 10 → false
          step - 9
            j++ = 4
          step - 10
            j < singLength → 4 < 7 → true
            a1[i] === singular[j] → 7 === 11 → false
          step - 11
            j++ = 5
          step - 12
            j < singLength → 5 < 7 → true
            a1[i] === singular[j] → 7 === 9 → false
          step - 13
            j++ = 6
          step - 14
            j < singLength → 6 < 7 → true
            a1[i] === singular[j] → 7 === 5 → false
          step - 15
            exiting from the inner loop.

      step - 3
        singular[singLength] = a1[i] → singular[7] = 7 (a1[11])

      step - 4
        singLength++ = 7 + 1 = 8.

      step - 5
        i++ = 11 + 1 = 12

singular = [12, 8, 15, 10, 11, 9, 5, 7]

Loop Iteration - 13:

let a1 = [12, 8, 15, 12, 10, 11, 15, 9, 5, 10, 8, 7, 9];
    Outer Loop,
      step - 1
        i = 12 / a1[12] = 9

      step - 2
        available = false.

        Inner Loop,
          step - 1
            j = 0
          step - 2
            j < singLength → 0 < 8 → true.
              a1[i] === singular[j] → 9 === 12 → false
          step - 3
            j++ = 1
          step - 4
            j < singLength → 1 < 8 → true
              a1[i] === singular[j] → 9 === 8 → false
            step - 5
            j++ = 2
          step - 6
            j < singLength → 2 < 8 → true
            a1[i] === singular[j] → 9 === 15 → false
          step - 7
            j++ = 3
          step - 8
            j < singLength → 3 < 8 → true
            a1[i] === singular[j] → 9 === 10 → false
          step - 9
            j++ = 4
          step - 10
            j < singLength → 4 < 8 → true
            a1[i] === singular[j] → 9 === 11 → false
          step - 11
            j++ = 5
          step - 12
            j < singLength → 5 < 8 → true
            a1[i] === singular[j] → 9 === 9 → true
              available = true
                break (immediate exit from the loop)

      step - 3
        since available = true, there will be no pushing of elements in the singular array.

      step - 4
        singLength++ = 6 + 1 = 7. and no increment of singLength as well.

      step - 5
        i++ = 10 + 1 = 11

  singular = [12, 8, 15, 10, 11, 9, 5, 7] // also the final answer.
 */
