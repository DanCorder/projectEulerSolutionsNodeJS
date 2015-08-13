var euler = require('./euler.js');

(function() {
    var factorial = [1];
    
    for (var i = 2; i <= 100; i++) {
        var additional = factorial.slice();
        for (var multiplier = 1; multiplier < i; multiplier++) {
            factorial = addBigNumbers(factorial, additional);
        }
    }
    
    var answer = 0;
    
    for (var index = 0; index < factorial.length; index++) {
        answer += factorial[index];
    }
    
    euler.printAnswer(answer);
})();

function addBigNumbers(num1, num2) {
    var result = [];
    var maxLength = Math.max(num1.length, num2.length);
    
    for (var i = 0; i < maxLength; i++) {
        if (i < num1.length && i < num2.length) {
            addDigits(num1[i], num2[i], i, result);
        } else if (i < num1.length) {
            addDigits(num1[i], 0, i, result);
        } else {
            addDigits(0, num2[i], i, result);
        }
    }
    
    return result;
}

function addDigits(digit1, digit2, index, result) {
    if (index >= result.length) {
        result.push(0);
    }

    var sum = digit1 + digit2 + result[index];
    result[index] = sum % 10;
    
    if (sum >= 10) {
        result.push(1);
    }
}