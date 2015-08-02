var euler = require('./euler.js');

(function() {
    var numberToFactor = 600851475143;
    
    var candidateFactor = 2;
    
    while(true) {
        if (numberToFactor % candidateFactor === 0) {
            numberToFactor /= candidateFactor;
            if (numberToFactor === 1) break;
        } else {
            candidateFactor = nextPrime(candidateFactor);
        }
    }

    euler.printAnswer(candidateFactor);
})();

function nextPrime(seed) {
    var candidate = seed + 1;
    
    while(!isPrime(candidate)) {
        candidate++;
    }
    
    return candidate;
}

function isPrime(value) {    
    var limit = Math.sqrt(value)
    
    for (var i=2; i <= limit; i++) {
        if (value % i === 0) return false;
    }
    
    return true;
}

