var euler = require('./euler.js');

(function() {
    var primes = [];
    var prime = 2;
    
    while (prime < 2000000) {
        primes.push(prime);
        prime = euler.nextPrime(prime);
    }
    
    var answer = 0;
    
    for (var i=0; i < primes.length; i++) {
        answer += primes[i];
    }
    
    euler.printAnswer(answer);
})();