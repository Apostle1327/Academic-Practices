// Bubble sort Algorithm

const bubbleSort = (array) => {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return array;
};

console.log(bubbleSort([5, 3, 8, 4, 2]));

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/*
  initial array = [5, 3, 8, 4, 2]

  Step 1:
    isSwapped = false

  Loop Iteration (Pass) 1:
    Iteration 1
      step 1:
        i = 0; 
      step 2:
        array[i] > array[i + 1] → 5 > 3 → True
      step 3 :
        temp = array[i] → temp = 5
        array[i] = array[i + 1] → array[i] = 3
        array[i + 1] = array[i] → array[i + 1] = 5
        isSwapped = true.
      step 4:
        i++ = i + 1 → 0 + 1 = 1 → i = 1

      array after swapping = [3, 5, 8, 4, 2]

    Iteration 2
      step 1:
        i = 1; 
      step 2:
        array[i] > array[i + 1] → 5 > 8 → False
      step 3 :
        No entry in the condition
      step 4:
        i++ = i + 1 → 1 + 1 = 2 → i = 2

      array after swapping = [3, 5, 8, 4, 2]

        Iteration 3
      step 1:
        i = 2; 
      step 2:
        array[i] > array[i + 1] → 8 > 3 → True
      step 3 :
        temp = array[i] → temp = 8
        array[i] = array[i + 1] → array[i] = 4
        array[i + 1] = array[i] → array[i + 1] = 8
        isSwapped = true.
      step 4:
        i++ = i + 1 → 2 + 1 = 3 → i = 3

      array after swapping = [3, 5, 4, 8, 2]

        Iteration 4
      step 1:
        i = 3; 
      step 2:
        array[i] > array[i + 1] → 8 > 2 → True
      step 3 :
        temp = array[i] → temp = 8
        array[i] = array[i + 1] → array[i] = 2
        array[i + 1] = array[i] → array[i + 1] = 8
        isSwapped = true.
      step 4:
        i++ = i + 1 → 3 + 1 = 3 → i = 3

      array after swapping = [3, 5, 4, 2, 8]

Loop Iteration (Pass) 2:
    Iteration 1
      step 1:
        i = 0; 
      step 2:
        array[i] > array[i + 1] → 3 > 5 → False
      step 3 :
        No entry in the condition
      step 4:
        i++ = i + 1 → 0 + 1 = 1 → i = 1

      array after swapping = [3, 5, 8, 4, 2]

    Iteration 2
      step 1:
        i = 1; 
      step 2:
        array[i] > array[i + 1] → 5 > 4 → True
        temp = array[i] → temp = 5
        array[i] = array[i + 1] → array[i] = 4
        array[i + 1] = array[i] → array[i + 1] = 5
        isSwapped = true.
      step 4:
        i++ = i + 1 → 1 + 1 = 2 → i = 2

      array after swapping = [3, 4, 5, 2, 8]

        Iteration 3
      step 1:
        i = 2; 
      step 2:
        array[i] > array[i + 1] → 5 > 2 → True
      step 3 :
        temp = array[i] → temp = 5
        array[i] = array[i + 1] → array[i] = 2
        array[i + 1] = array[i] → array[i + 1] = 5
        isSwapped = true.
      step 4:
        i++ = i + 1 → 2 + 1 = 3 → i = 3

      array after swapping = [3, 4, 2, 5, 8]

        Iteration 4
      step 1:
        i = 3; 
      step 2:
        array[i] > array[i + 1] → 5 > 8 → False
      step 3 :
        No entry in the condition.

      array after swapping = [3, 4, 2, 5, 8]
*/
