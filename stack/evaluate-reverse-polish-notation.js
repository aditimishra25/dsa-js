/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

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
    return typeof str === 'string' &&
           str.trim() !== '' &&
           !isNaN(Number(str));
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

