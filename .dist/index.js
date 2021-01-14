"use strict";
exports.__esModule = true;
exports.addComma = exports.chengeFizzBuzz = exports.refineString = exports.printFizzBuzz = void 0;
var printFizzBuzz = function () {
    var numbers1_100 = Array.from(new Array(100).keys()).map(function (i) { return i + 1; });
    var fizzbuzz = exports.refineString(numbers1_100);
    return fizzbuzz;
};
exports.printFizzBuzz = printFizzBuzz;
var refineString = function (number) {
    var newarray = number.map(function (x) { return exports.chengeFizzBuzz(x); });
    var fizzbuzzString = exports.addComma(newarray);
    return fizzbuzzString;
};
exports.refineString = refineString;
var chengeFizzBuzz = function (number) {
    if (number % 15 == 0) {
        return 'Fizz Buzz';
    }
    else if (number % 5 == 0) {
        return 'Buzz';
    }
    else if (number % 3 == 0) {
        return 'Fizz';
    }
    else {
        return number.toString();
    }
};
exports.chengeFizzBuzz = chengeFizzBuzz;
var addComma = function (comma) {
    return comma.join(",");
};
exports.addComma = addComma;
console.log(exports.printFizzBuzz());
