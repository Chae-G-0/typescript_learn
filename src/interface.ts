// interface 프로퍼티를 정의해서 객체로 표현하고자 할 때 사용한다.

interface User {
    name: string;
    age: number
}

let user: User = {
    name: 'ccc',
    age:30
}

console.log(user.age)