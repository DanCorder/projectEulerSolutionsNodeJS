var euler = require('./euler.js');

(function() {
    
    var endDate = new Date(Date.UTC(2000, 11, 31));
    // In date constructors months are 0 based, years and days aren't
    var month = 0;
    var date = new Date(1901, month, 1);
    var answer = 0;
    
    while (date < endDate) {
        // 0 = Sunday
        if (date.getDay() === 0) {
            answer++;
        }
        
        month++;
        date = new Date(1901, month, 1);
    }
    
    euler.printAnswer(answer);
})();