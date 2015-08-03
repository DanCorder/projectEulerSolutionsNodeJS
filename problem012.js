var euler = require('./euler.js');

(function() {
    var numberOfDivisors = 0;
    var triangleNumber = 0;
    var triangleIncrement = 1;
    
    while (numberOfDivisors < 500) {
        triangleNumber += triangleIncrement;
        triangleIncrement++;
        
        numberOfDivisors = euler.getNumberOfDivisors(triangleNumber);
    }
    
    euler.printAnswer(triangleNumber);
})();