var crypto = require('crypto');

(function() {
    var sum = 0;
    for (var i=0; i < 1000; i++) {
        if (i % 3 === 0 ||
            i % 5 === 0) {
                sum += i;
            }
    }
    
    logAnswer(sum);
})();

function logAnswer(answer) {
    console.log('Answer: ' + answer);
    var hash = crypto.createHash('md5').update(answer.toString()).digest('hex');
    console.log('Hash:   ' + hash);
}
