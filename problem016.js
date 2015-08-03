var euler = require('./euler.js');

(function() {
    var powersOfTwo = [2];
    
    for (var i=1; i < 1000; i++) {
        var carry = 0;
        for(var j=0; j < powersOfTwo.length; j++) {
            var doubleDigit = (powersOfTwo[j] * 2) + carry;
            carry = doubleDigit > 9 ? 1 : 0;
            powersOfTwo[j] = doubleDigit % 10;
        }
        if (carry === 1) {
            powersOfTwo.push(1);
        }
    }
    
    var answer = 0;
    
    for(var j=0; j < powersOfTwo.length; j++) {
        answer += powersOfTwo[j];
    }
    
    euler.printAnswer(answer);
})();


