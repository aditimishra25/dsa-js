/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isNumber(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      let result = performOperations(a, b, tokens[i]);

      stack.push(result);
    }
  }

  return stack[0];
};

function isNumber(str) {
  return typeof str === "string" && str.trim() !== "" && !isNaN(Number(str));
}

function performOperations(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return Math.trunc(a / b);
  }
}

// ------------------------revision-1---------------------------------
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNumber(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let a = stack.pop();
      let b = stack.pop();

      stack.push(performOperations(b, a, tokens[i]));
    }
  }
  console.log(stack);
  return stack[0];
};

isNumber = (str) => {
  return typeof str === "string" && str.trim() !== "" && !isNaN(Number(str));
};

performOperations = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

evalRPN(["2", "1", "+", "3", "*"]);
