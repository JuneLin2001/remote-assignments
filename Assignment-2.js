function calculate(args) {
    // your code here
    let { n1, n2, op } = args;
    let result;
    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else {
        result = 'Not supported';
    }

    return result;
}
    

console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' }));  // expected output: 3

console.log(calculate({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'