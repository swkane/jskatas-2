function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse('sam'));

function reverseSentence(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence('switch my order'));

function minArray(arr) {
   return Math.min(...arr);
}

console.log(minArray([2, 1, 3]));

function maxArray(arr) {
    return Math.max(...arr);
}

console.log(maxArray([2, 1, 3]));

function remainder(numerator, denominator) {
    return numerator % denominator;
}

console.log(remainder(5, 3));

function uniqueElements(arr) {
    let result = [];
    arr.map( i => {
        if (result.indexOf(i) == -1) {
            result.push(i);
        }
    })
    return result;
}

console.log(uniqueElements([1,1,1,2,3,2,5]));

function uniqueCounts(arr) {
    let result = {};
    arr.map( i => {
        if (result[i]) {
            result[i] = result[i] + 1;
        } else {
            result[i] = 1;
        }
    })
    return result;
}

console.log(uniqueCounts([1, 1, 1, 2, 3, 2, 5]));

function evaluateExpression(expression, object) {
    let arr = expression.split(' ');
    let result = [];
    arr.map( i => {
        if (object[i]) {
            result.push(object[i]);
        } else {
            result.push(i);
        }
    })
    return eval(result.join(''));
}

console.log(evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }));