"use strict";
// 함수
function addd(num3, num4) {
    // return num3 + num4;
    console.log(num3 + num4);
}
// 함수의 매개변수도 interface처럼 옵셔널로 지정할 수 있다. 선택적 매개변수라고 한다. 옵셔널이더라도 타입은 지켜줘야한다.
function hello(name) {
    return "Hello, ".concat(name || "world");
}
var result = hello();
var result2 = hello("sam");
// 선택적 매개변수가 필수 매개변수보다 뒤에 있어야 한다. 앞에 있으면 에러가 발생한다.옵셔널한 값은 입력을 안해도 된다느 의미이기 때문에 성립할 수 없다.
function hi(name, age) {
    if (age !== undefined) {
        return "hello, ".concat(name, ", you are ").concat(age);
    }
    else {
        return "hello, ".concat(name);
    }
}
console.log(hi("Sam"));
console.log(hi("sam", 30));
// 나머지 매개변수 타입 작성법
function plus() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
plus(1, 2, 3);
console.log(plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
