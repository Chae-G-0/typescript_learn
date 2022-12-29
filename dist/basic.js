"use strict";
var Hello = "hello typescript";
console.log(Hello);
// 기본 타입
var car = 'bmw';
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3, 4];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['mon', 'tue', 'wed'];
// 튜플(Tuple)
var b;
b = ['a', 1];
// b = [1, 'b']; 오류 발생
b[0].toLocaleLowerCase;
console.log(b);
// b[1].toLocaleLowerCase; 문자열 메소드이므로 숫자형에 사용할 수 없음
// void 아무것도 반환하지 않는 함수에서 주로 사용한다.
var sayHello = function () {
    console.log("hello");
};
// never 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용한다.
var showError = function () {
    throw new Error();
};
var infLoof = function () {
    while (true) {
        // do something...
    }
};
// enum 비슷한 값들 끼리 묶어준다. enum에 수동으로 값을 주지 않으면 자동으로 0부터 1씩 증가하면서 할당된다.
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
console.log(Os[10]); // Ios
console.log(Os['Ios']); // 10
// 양방향 맵핑이 된다. 문자열을 넣으면 단방향 맵핑
var myOs;
myOs = Os.Window; // 특정값만 입력할 수 있게 강제하고 싶을 때 그리고 그 값들이 공통점을 가지고 있을 때 사용한다.
// null, undefined
var n = null;
var u = undefined;
