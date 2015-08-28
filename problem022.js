var euler = require('./euler.js');
var fs = require('fs');
var path = require('path');

(function() {
    var filePath = path.join(__dirname, 'files/names.txt');

    var fileContents = fs.readFileSync(filePath, {encoding: 'utf-8'});
    
    var names = fileContents.replace(/"/g, '').split(',');
    names.sort();
    
    var answer = 0;
    
    for (var i = 0; i < names.length; i++) {
        answer += ((i + 1) * scoreName(names[i]));
    }
    
    euler.printAnswer(answer);
})();

function scoreName(name) {
    var score = 0;
    
    for (var i = 0; i < name.length; i++) {
        score += scoreLetter(name.charAt(i));
    }
    
    return score;
}

function scoreLetter(letter) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    return alphabet.indexOf(letter) + 1;
}