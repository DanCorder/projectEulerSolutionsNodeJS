var euler = require('./euler.js');

(function() {
    // Encode each move right as 0 and each move down as 1. We must end up with
    // a 40 character string with 20 '0's and 20 '1's
    // We need to work out how many possible different strings there are.
    // This is the same as C(40, 20)
    var answer = euler.combinations(40, 20);
    
    euler.printAnswer(answer);
})();