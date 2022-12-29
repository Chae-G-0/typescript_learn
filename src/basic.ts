let Hello:string = "hello typescript"
console.log(Hello)


// 기본 타입

let car: string = 'bmw'

let age: number = 30;
let isAdult:boolean = true;
let a:number[] = [1, 2, 3]
let a2: Array<number> = [1, 2, 3, 4]

let week1:string[] = ['mon', 'tue', 'wed']
let week2: Array<string> = ['mon', 'tue', 'wed']

// 튜플(Tuple)

let b: [string, number];
b = ['a', 1];
// b = [1, 'b']; 오류 발생
b[0].toLocaleLowerCase;
console.log(b)
// b[1].toLocaleLowerCase; 문자열 메소드이므로 숫자형에 사용할 수 없음

// void 아무것도 반환하지 않는 함수에서 주로 사용한다.

const sayHello = ():void => {
    console.log("hello")
}

// never 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용한다.

const showError = ():never => {
    throw new Error()
}

const infLoof = ():never => {
    while (true) {
        // do something...
    }
}

// enum 비슷한 값들 끼리 묶어준다. enum에 수동으로 값을 주지 않으면 자동으로 0부터 1씩 증가하면서 할당된다.

enum Os {
    Window = 3,
    Ios = 10,
    Android
}

console.log(Os[10]) // Ios
console.log(Os['Ios']) // 10
// 양방향 맵핑이 된다. 문자열을 넣으면 단방향 맵핑

let myOs: Os;
myOs = Os.Window // 특정값만 입력할 수 있게 강제하고 싶을 때 그리고 그 값들이 공통점을 가지고 있을 때 사용한다.

// null, undefined

let n: null = null;
let u: undefined = undefined;


