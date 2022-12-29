// interface 프로퍼티를 정의해서 객체로 표현하고자 할 때 사용한다.

type Score = 'A' | 'B' | "C" | 'F';

interface User {
    name: string;
    age: number;
    gender?: string; // 입력을 해도 되고 안해도 되는 옵셔널한 속성은 뒤에 ?를 붙여준다.
    readonly birthYear: number; // 읽기 전용 속성으로, 최초에 생성할 때만 할당할 수 있고 수정할 수 없다.
    [grade: number]: Score; // Score에 선언된 값만 할당할 수 있다.
}

let user: User = {
    name: 'ccc',
    age: 30,
    birthYear: 1992,
    1: 'A',
    2: 'C',
}

user.age = 10;
user.gender = 'female'

// interface로 함수 정의하기

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = function (x,y) {
    return x + y;
}

add(10, 20);

interface IsAdult {
    (age: number): boolean;
}

const g:IsAdult = (age) => {
    return age > 19;
}
g(22) // true
 
// implements 클래스 정의

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c
    }
    start(): void {
        console.log('go');
    }
}

const Green = new Bmw("green");
console.log(Green)
Green.start();

// extends : interface는 확장이 가능하다.

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz: Benz = {
    door: 5,
    stop() {
        console.log("stop!!")
    },
    color: 'white',
    wheels: 4,
    start() {
        console.log("Go!")
    },
}

interface Toy {
    name: string;
}

// 확장은 여러개를 할 수 도 있다.
// Car와 Toy라는 각각의 interface가 있을 때, 동시에 확장해서 ToyCar를 만들 수 있다.
interface ToyCar extends Car, Toy {
    price: number;
}