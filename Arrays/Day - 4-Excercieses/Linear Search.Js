// Linear Search Algorithm

let array = [
  { username: "Anonymous" },
  { username: "Anarchists" },
  { username: "oxygen" },
];

let result = (array, target) => {
  for (let name of array) {
    if (name.username === target) {
      return true;
    }
  }
  return false;
};

console.log(result(array, "Anonymous"));

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Dry Run of The Given Logic.

/*
    step 1:
        invoking the Function with argument "Anonymous"

    step 2:
        within the provided array of Objects it'll begin the iterations

    step 3:
        iteration 1:
            name.username === target → "Anonymous" === "Anonymous"
            return true.
    step 4:
        with the condition being true, we get 'True' as return value. Which also happens to be the desired output we need
 */
