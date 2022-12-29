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
