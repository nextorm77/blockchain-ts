// 추상 클래스는 상속받을 클래스가 구현할 것들을 알려줌?=>일종의 청사진
// 스스로는 인스턴스X
// JS에선 일반 클래스로 컴파일되어 무거워짐
// => interface를 쓰는 이유(코드 생성X: 가벼움)
/*
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
class Player extends User {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello, ${name}. My name is ${this.fullName()}`;
  }
}

*/

// 추상클래스 상속을 interface 상속으로 변경
// interface는 obj의 모양을 알려주는 역할에 충실 => 클래스의 모양도 특정
// and JS 코드로 변환되지 않아서 JS 파일을 줄일 수 있음
// but 추상클래스처럼 private 접근 제어자를 사용할 수 없고
// constructor도 생성X
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
// extends 대신 implements(JS에 없음: 가벼워짐)
// 다수의 interface가 상속될 수 있음: 팀원들과 작업시 장점
class Player implements User, Human {
  // 추상 클래스와의 차이: private을 쓸 수 없음
  //constructor(private firstName: string, private lastName: string) {}
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello, ${name}. My name is ${this.fullName()}`;
  }
}

// interface를 type처럼 사용
function makeUser(user: User) {
  return "hi";
}

// class와 다르게 내용물만 열거.
// makeUser(new User(...)) => X
makeUser({
  firstName: "snoo",
  lastName: "son",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
