var euler = require('./euler.js');

(function() {
    var sum = 0;
    var sumOfSquares = 0;
    
    for (var i=1; i < 101; i++) {
        sum += i;
        sumOfSquares += (i*i);
    }
    
    var answer = (sum * sum) - sumOfSquares;
    
    euler.printAnswer(answer);
})();