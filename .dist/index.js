"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertComma = exports.convertFizzBuzzRules = exports.outputOneToHundred = void 0;
var outputOneToHundred = function () {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array.push(exports.convertFizzBuzzRules(i));
    }
    return array;
};
exports.outputOneToHundred = outputOneToHundred;
var convertFizzBuzzRules = function (number) {
    if (number % 15 == 0)
        return 'Fizz Buzz';
    if (number % 5 == 0)
        return 'Buzz';
    if (number % 3 == 0)
        return 'Fizz';
    return number.toString();
};
exports.convertFizzBuzzRules = convertFizzBuzzRules;
var insertComma = function () {
    return exports.outputOneToHundred().join(',');
};
exports.insertComma = insertComma;
console.log(exports.insertComma());
