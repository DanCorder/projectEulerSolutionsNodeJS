var euler = require('./euler.js');

(function() {
    var abundantNumbers = [12];
    
    for (var i = 13; i < 28112; i++) {
        if (isAbundant(i)) {
            abundantNumbers.push(i);
        }
    }
    
    console.log('found abundant numbers');
    
    var sumOfNumbersToLimit = 28123 * (28124 / 2);
    
    var sumOfAbundantNumberSums = 0;
    // object[] is hundreds of times faster than array.indexOf()
    var abundantNumberSums = {};
    
    for (var i = 0; i < abundantNumbers.length; i++) {
        for (var j = i; j < abundantNumbers.length; j ++) {
            var sum = abundantNumbers[i] + abundantNumbers[j];
            
            if (sum <= 28123 && !abundantNumberSums[sum]) {
                abundantNumberSums[sum] = true;
                sumOfAbundantNumberSums += sum;
            }
            
            if (sum > 28123) break;
        }
    }
    
    var answer = sumOfNumbersToLimit - sumOfAbundantNumberSums;
    
    euler.printAnswer(answer);
})();


function isAbundant(value) {
    var properDivisors = euler.getProperDivisors(value);
    
    var sum = 0;
    for (var i = 0; i < properDivisors.length; i++) {
        sum += properDivisors[i];
    }
    
    return sum > value;
}