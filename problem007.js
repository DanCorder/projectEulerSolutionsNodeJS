var euler = require('./euler.js');

(function() {
    var currentPrime = 2;
    
    for (var i=1; i < 10001; i++) {
        currentPrime = euler.nextPrime(currentPrime);
    }
    
    euler.printAnswer(currentPrime);
})();