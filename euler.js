var crypto = require('crypto');

exports.printAnswer = function(answer) {
    var hash = crypto.createHash('md5')
                     .update(answer.toString())
                     .digest('hex');
    
    console.log('Answer: ' + answer);
    console.log('Hash:   ' + hash);
}

exports.isPrime = function(value) {    
    var limit = Math.sqrt(value)
    
    for (var i=2; i <= limit; i++) {
        if (value % i === 0) return false;
    }
    
    return true;
}

exports.nextPrime = function(seed) {
    var candidate = seed + 1;
    
    while(!exports.isPrime(candidate)) {
        candidate++;
    }
    
    return candidate;
}

exports.getProperDivisors = function(value) {
    var divisors = [];
    
    for (var i = 1; i < value; i++) {
        if (value % i === 0) {
            divisors.push(i);
        }
    }
    
    return divisors;
}

exports.getNumberOfDivisors = function(value) {
    var limit = Math.sqrt(value)
    var divisors = 0;
    
    for (var i=1; i < limit; i++) {
        if (value % i === 0) divisors++;
    }
    
    divisors *= 2;
    
    if (Number.isInteger(limit)) {
        divisors++;
    }
    
    return divisors;
}

exports.getCollatzSequence = function(value) {
    var sequence = [value];
    
    while (value !== 1) {
        value = getNextCollatzNumber(value);
        sequence.push(value);
    }
    
    return sequence;
    
    function getNextCollatzNumber(value) {
        if (value % 2 === 0) {
            return value / 2;
        } else {
            return (value * 3) + 1;
        }
    }
}

exports.combinations = function(n, r) {
    var numerator = exports.factorial(n);
    var denomiator = exports.factorial(r) * exports.factorial(n - r);
    
    return numerator / denomiator;
}

exports.factorial = function(value) {
    var result = 1;
    
    for (var i=2; i <= value; i++) {
        result *= i;
    }
    
    return result;
}
