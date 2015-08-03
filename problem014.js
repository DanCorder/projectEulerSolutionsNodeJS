var euler = require('./euler.js');

(function() {
    
    var longestChain = 0;
    var startForLongestChain = 0;
    
    for (var i=1; i < 1000000; i++) {
        var currentChainLength = euler.getCollatzSequence(i).length;
        
        if (currentChainLength > longestChain) {
            longestChain = currentChainLength;
            startForLongestChain = i;
        }
    }
    
    euler.printAnswer(startForLongestChain);
})();