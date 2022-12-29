"use strict";
// interface 프로퍼티를 정의해서 객체로 표현하고자 할 때 사용한다.
var user = {
    name: 'ccc',
    age: 30,
    birthYear: 1992,
    1: 'A',
    2: 'C',
};
user.age = 10;
user.gender = 'female';
var add = function (x, y) {
    return x + y;
};
add(10, 20);
var g = function (age) {
    return age > 19;
};
g(22); // true
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('go');
    };
    return Bmw;
}());
var Green = new Bmw("green");
console.log(Green);
Green.start();
var benz = {
    door: 5,
    stop: function () {
        console.log("stop!!");
    },
    color: 'white',
    wheels: 4,
    start: function () {
        console.log("Go!");
    },
};
