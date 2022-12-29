// 함수

function addd(num3:number, num4:number):void {
    // return num3 + num4;
    console.log(num3 + num4);
}

// 함수의 매개변수도 interface처럼 옵셔널로 지정할 수 있다. 선택적 매개변수라고 한다. 옵셔널이더라도 타입은 지켜줘야한다.

function hello(name?:string) {
    return `Hello, ${name || "world"}`;
}

const result = hello();
const result2 = hello("sam");