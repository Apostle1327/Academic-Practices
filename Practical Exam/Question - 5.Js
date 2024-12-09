// Balanced Parenthesis

function isBalanced(parenthesis) {
  let stack = [];
  for (let char in parenthesis) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    }

    topVal = stack.pop();
    if (
      (char === "(" && topVal !== ")") ||
      (char === "[" && topVal !== "]") ||
      (char === "{" && topVal !== "}")
    ) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("{[()]}"));
