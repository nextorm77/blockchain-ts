/*
// type 활용 #1: obj의 모양을 묘사
type Player = {
  nickName: string;
  healthBar: number;
};

// Player 자동완성 기능 활용
const son: Player = {
  nickName: "son",
  healthBar: 10,
};

// type 활용 #2: concrete 타입의 별칭
type Food = string;

const kimchi: Food = "delicious";

type Friends = Array<string>;

// type 활용 #3: concrete 타입을 특정 값으로 제한
type Team = "red" | "blue" | "yellow";
type Health = 1 | 2 | 3;
type User = {
  nickName: string;
  team: Team;
  health: Health;
};

const son: User = {
  nickName: 'son',
  team: 'red',
  health: 2;
}
*/

/*
// interface: obj 모양을 묘사=>type 기능과 유사
// but, 다재다능한 type과 달리 interface는 위의 기능만 있음
// obj의 모양을 특정하는 기능만 있음
// TS에서 obj의 모양을 알려주는 방법 2가지: type, interface
// class를 다루는 것과 유사
interface Player {
  nickName: string;
  healthBar: number;
};
*/

/* class와 비슷
interface User {
  name: string;
}

interface Player extends User {}

const son: Player = {
  name: "son",
};
*/

/* 위 interface 코드를 type으로 구현
type User = {
  name: string;
};

type Player = User & {};

const son: Player = {
  name: "son",
};
*/
// 동일 내용이지만 interface 구현이 OOP스럽고 이해하기 좋음

// interface의 특징: 동일명으로 property를 축적할 수 있음
// type은 불가능
interface User {
  name: string;
}

interface User {
  lastName: string;
}

interface User {
  health: number;
}

const user: User = {
  name: "snoo",
  lastName: "son",
  health: 17,
};
