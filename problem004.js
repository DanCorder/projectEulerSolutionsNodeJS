var euler = require('./euler.js');

(function() {
    var answer = 0;
    
    for (var value1=100; value1 < 1000; value1++) {
        for (var value2=100; value2 < 1000; value2++) {
            var product = value1 * value2;
            if (product > answer &&
                isPalindrome(product)) {
                answer = product;
            }
        }
    }
    
    euler.printAnswer(answer);
})();

function isPalindrome(value) {
    var valueString = value.toString();
    var length = valueString.length;
    
    for (var i=0; i < length/2; i++) {
        if (valueString[i] !== valueString[length - 1 - i]) return false;
    }
    
    return true;
}