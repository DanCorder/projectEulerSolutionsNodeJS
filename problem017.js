var euler = require('./euler.js');

(function() {
    var answer = 0;
    
    for (var i = 1; i <= 1000; i++) {
        answer += getLettersForNumber(i);
    }
    
    euler.printAnswer(answer);
})();

function getLettersForNumber(number) {
    if (number < 10) {
        return lettersForSingleDigitNumber(number);
    }
    else if (number < 100) {
        return lettersForDoubleDigitNumber(number);
    }
    else if (number < 1000) {
        return lettersForTripleDigitNumber(number);
    }
    else if (number === 1000) {
        return 11; // one thousand
    }
    
    throw "Bad number " + number;
}

function lettersForSingleDigitNumber(number) {
    switch (number) {
        case 1: return 3; // one
        case 2: return 3; // two
        case 3: return 5; // three
        case 4: return 4; // four
        case 5: return 4; // five
        case 6: return 3; // six
        case 7: return 5; // seven
        case 8: return 5; // eight
        case 9: return 4; // nine
        default:
            throw "Not single digit: " + number;
    }
}

function lettersForDoubleDigitNumber(number) {
    if (number < 20) {
        switch (number) {
            case 10: return 3; // ten
            case 11: return 6; // eleven
            case 12: return 6; // twelve
            case 13: return 8; // thirteen
            case 14: return 8; // fourteen
            case 15: return 7; // fifteen
            case 16: return 7; // sixteen
            case 17: return 9; // seventeen
            case 18: return 8; // eighteen
            case 19: return 8; // nineteen
            default:
                throw "Not double digit: " + number;
        }
    }
    
    var letters = 0;
    
    if (number < 30) letters = 6;      // twenty
    else if (number < 40) letters = 6; // thirty
    else if (number < 50) letters = 5; // forty
    else if (number < 60) letters = 5; // fifty
    else if (number < 70) letters = 5; // sixty
    else if (number < 80) letters = 7; // seventy
    else if (number < 90) letters = 6; // eighty
    else if (number < 100) letters = 6; // ninety
    else throw "Not double digit: " + number;
    
    var units = number % 10;
    
    if (units !== 0) {
        letters += lettersForSingleDigitNumber(units);
    }
    
    return letters;
}

function lettersForTripleDigitNumber(number) {
    var letters = 0;
    
    var hundreds = Math.floor(number / 100);
    letters += lettersForSingleDigitNumber(hundreds);
    letters += 7; // hundred
    
    var remainder = number % 100;
    
    if (remainder !== 0) {
        letters += 3; // and
        
        if (remainder < 10) {
            letters += lettersForSingleDigitNumber(remainder);
        } else {
            letters += lettersForDoubleDigitNumber(remainder);
        }
    }
        
    return letters;
}