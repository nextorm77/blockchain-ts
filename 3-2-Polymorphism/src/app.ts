// Polymorphism(다형성)

/* concrete type(구체 타입: number, string...)으로 구현
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
*/

// generic: type의 placeholder, concreate type 대신 사용
// call signature를 작성할 때, 들어올 확실한 타입을 모를 때 generic 사용

// 예시1
type SuperPrint = {
  <TypePlaceHolder>(arr: TypePlaceHolder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

// TS는 placeholder에서 TS가 알아낸 타입으로 대체
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
superPrint([1, 2, true, "hello"]);

// 예시2: 리턴 타입도 Generic
type SuperPrint2 = {
  <T>(arr: T[]): T;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];

// TS는 placeholder에서 TS가 알아낸 타입으로 대체
const a = superPrint2([1, 2, 3, 4]);
const b = superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, 2, true, false]);
const e = superPrint2([1, 2, true, "hello"]);
