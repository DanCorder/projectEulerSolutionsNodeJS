var euler = require('./euler.js');

(function() {
    var lookup = {};
    
    for (var i = 2; i < 10000; i++) {
        lookup[i] = sumArray(euler.getProperDivisors(i));
    }
    
    var answer = 0;
    
    for (var i = 2; i < 10000; i++) {
        var sumOfDivisors = lookup[i];
        
        if (sumOfDivisors > 1 &&
            sumOfDivisors < 10000 &&
            sumOfDivisors !== i &&
            i === lookup[sumOfDivisors]) {
                answer += i;
        }
    }
    
    euler.printAnswer(answer);
})();

function sumArray(numberArray) {
    var result = 0;
    
    for (var i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    
    return result;
}