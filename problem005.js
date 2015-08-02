var euler = require('./euler.js');

(function() {
    var answer = 20;
    
    while(true) {
        if (answer %  2 === 0 &&
            answer %  3 === 0 &&
            answer %  4 === 0 &&
            answer %  5 === 0 &&
            answer %  6 === 0 &&
            answer %  7 === 0 &&
            answer %  8 === 0 &&
            answer %  9 === 0 &&
            answer % 10 === 0 &&
            answer % 11 === 0 &&
            answer % 12 === 0 &&
            answer % 13 === 0 &&
            answer % 14 === 0 &&
            answer % 15 === 0 &&
            answer % 16 === 0 &&
            answer % 17 === 0 &&
            answer % 18 === 0 &&
            answer % 19 === 0 &&
            answer % 20 === 0) break;
        answer++;
    }
    
    euler.printAnswer(answer);
})();