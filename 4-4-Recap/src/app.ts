// abstract class를 다른 class들이 특정 모양을 따르도록 하기 위한 용도로
// 쓴다면 같은 역할을 하는 interface(ex: class Player extends User =>
// class Player implemnets User)를 권장

// type vs interface
// type #1: obj의 모양을 설명

/*
type PlayerA = {
  name: string;
};
// 상속?: type의 경우 합치는 것?
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: "snoo",
  lastName: "son",
};
/////
interface PlayerB {
  name: string;
}
// 상속: OOP 개념
// interface끼리: extends
// class 상속: implements
interface PlayerBB extends PlayerB {
  lastName: string;
}
// PlayerBB 확장: type은 불가능
interface PlayerBB {
  health: number;
}
const playerB: PlayerBB = {
  name: "nancy",
  lastName: "son",
  health: 20,
};
*/

/* 위 property 확장을 아래와 같이 할 수도 있음
interface PlayerB {
  name: string;
}
interface PlayerB {
  lastName: string;
}
interface PlayerB {
  health: number;
}
const playerB: PlayerB = {
  name: "nancy",
  lastName: "son",
  health: 20,
};
*/

// 추상화 클래스 대체 => interface, type 사용

// TS 커뮤니티 권장 사항
// => class나 obj의 모양을 정의하고 싶으면 interface 사용
// but 다른 모두의 경우에는 type 사용

// TS의 대형 프로젝트 필드의 경우 대개 interface 제공
// => interface를 사용하는 것이 직관적이기 때문?
type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
// type 상속?
class User implements PlayerA {
  constructor(public firstName: string) {}
}
/* interface 상속
class User implements PlayerB {
  constructor(public firstName: string) {}
}
// 추상화 대체 클래스 끝
*/

// type #2: 다른 concrete type의 Alias(별칭)으로 사용
type Age = number;
// type #3: concrete type의 특정 값으로 제한
type team = "red" | "blue" | "green";
