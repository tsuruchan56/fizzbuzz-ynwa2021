"use strict";
exports.__esModule = true;
exports.lastElementSlice = exports.tofizzbuzz = exports.printOneToHundred = void 0;
var printOneToHundred = function () {
    var str = '';
    for (var i = 1; i <= 100; i++) {
        str += exports.tofizzbuzz(i) + ",";
    }
    return (exports.lastElementSlice(str));
};
exports.printOneToHundred = printOneToHundred;
var tofizzbuzz = function (number) {
    var result;
    if (number % 15 == 0) {
        result = 'Fizz Buzz';
    }
    else if (number % 5 == 0) {
        result = 'Buzz';
    }
    else if (number % 3 == 0) {
        result = 'Fizz';
    }
    else {
        result = number.toString();
    }
    return result;
};
exports.tofizzbuzz = tofizzbuzz;
var lastElementSlice = function (cut) {
    return cut.slice(0, -1);
};
exports.lastElementSlice = lastElementSlice;
console.log(exports.printOneToHundred());
