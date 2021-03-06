var euler = require('./euler.js');

(function() {
    var sum = 2;
    var fib1 = 1;
    var fib2 = 2;
    var newFib = 3;
    
    while (newFib < 4000000) {
        if (newFib % 2 === 0) {
            sum += newFib;
        }
        
        fib1 = fib2;
        fib2 = newFib;
        newFib = fib1 + fib2;
    }

    euler.printAnswer(sum);
})();
