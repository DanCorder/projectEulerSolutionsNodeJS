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