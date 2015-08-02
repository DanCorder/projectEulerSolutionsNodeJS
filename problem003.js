var euler = require('./euler.js');

(function() {
    var numberToFactor = 600851475143;
    
    var candidateFactor = 2;
    
    while(true) {
        if (numberToFactor % candidateFactor === 0) {
            numberToFactor /= candidateFactor;
            if (numberToFactor === 1) break;
        } else {
            candidateFactor = euler.nextPrime(candidateFactor);
        }
    }

    euler.printAnswer(candidateFactor);
})();
