var euler = require('./euler.js');

(function() {
    var a;
    var b;
    var c = 998;
    var answerFound = false;
    
    while(!answerFound) {
        c--;
        a = 1;
        b = 1000 - c - a;
        
        while (a < b) {
            if (isPythagoreanTriplet(a, b, c)) {
                answerFound = true;
                break;
            }
            a++;
            b--;
        }
    }
    
    var answer = a * b * c;
    
    euler.printAnswer(answer);
})();

function isPythagoreanTriplet(a, b, c) {
    return (a*a) + (b*b) === (c*c);
}