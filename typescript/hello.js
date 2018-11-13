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
for (var val in arr2) {
    console.log(val);
}
//泛型
var arr = [];
arr[0] = 1;
// function fn(args:any) : any {
//     return 123; 
// }
//<T>
function fn(args) {
    return args;
}
var Student = /** @class */ (function () {
    function Student(args) {
        this.args = args;
    }
    return Student;
}());
var wuge = new Student({
    name: 'wuge',
    age: 24
});
var ade = /** @class */ (function () {
    function ade() {
    }
    ade.prototype.eat = function () {
    };
    return ade;
}());
var num = /** @class */ (function () {
    function num() {
        this.arrNum = [1, 2, 2];
    }
    return num;
}());
