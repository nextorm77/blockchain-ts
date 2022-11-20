// 오버로딩 이해 필요 이유
// 실제 오버로딩 함수 코딩 자주 하진 않지만
// 외부 라이브러리 사용시 대부분 오버로딩 함수로 제공

// call signature 심화

// 단축 작성
// type add = (a: number, b: number) => number;

/* 
// 길게 작성 for 오버로딩
// overloading: 여러 개의 call signature가 있는 함수
// 아래 예시는 오버로딩의 핵심을 보여주지만 이렇게 사용하는 경우는 거의 없음
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// 실제 일어날 수 있는 예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
 */

/* 
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// call signature를 해석하면 c는 옵션이므로
// 구현시 추가 타입 설정?
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
 */
