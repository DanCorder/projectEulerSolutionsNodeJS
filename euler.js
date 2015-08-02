var crypto = require('crypto');

exports.printAnswer = function(answer) {
    var hash = crypto.createHash('md5')
                     .update(answer.toString())
                     .digest('hex');
    
    console.log('Answer: ' + answer);
    console.log('Hash:   ' + hash);
}