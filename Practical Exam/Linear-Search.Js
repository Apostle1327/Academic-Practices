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
