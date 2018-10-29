"use strict";
var i = 12;
i = '12';
function abc(a, b, c) {
    if (c === void 0) { c = 233; }
    console.log(a, b, c);
}
abc(12, 3);
function getStock() {
    return {
        code: 'apple',
        price: 135
    };
}
var _a = getStock(), code = _a.code, price = _a.price;
console.log(code, price);
var arr1 = [1, 2, 3, 4, 5];
var number1 = arr1[0], number2 = arr1[2];
console.log(number1, number2); //print:1 3
var arr2 = [99, 23, 12, 76, 35];
for (var val of arr2) {
    if(val <15) break;
    console.log(val);
}
