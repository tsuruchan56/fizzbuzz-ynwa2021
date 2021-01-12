"use strict";
exports.__esModule = true;
exports.tofizzbuzz = exports.printOneToHundred = void 0;
function printOneToHundred() {
    var str = '';
    for (var i = 1; i <= 100; i++) {
        str += tofizzbuzz(i) + ",";
    }
    return str.slice(0, -1);
}
exports.printOneToHundred = printOneToHundred;
function tofizzbuzz(number) {
    var result = [];
    if (number % 15 == 0) {
        result.push('Fizz Buzz');
    }
    else if (number % 5 == 0) {
        result.push('Buzz');
    }
    else if (number % 3 == 0) {
        result.push('Fizz');
    }
    else {
        result.push(number);
    }
    return result.join(",");
}
exports.tofizzbuzz = tofizzbuzz;
console.log(printOneToHundred());
