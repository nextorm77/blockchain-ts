// 실제 필드에선 외부 라이러브러 및 패키지 사용시
// Generic(call signature)을 다루게 됨
// 다시 말해, 라이브러리를 만들거나 다른 개발자가
// 사용할 기능을 개발하는 경우엔 Generic이 유용

// 대부분의 경우, Generic(call signature)을 사용만 하고
// 직접 만드는 경우는 거의 없음

// call signature외에 Generic의 다른 사용 방법 #1
function superPrint<T>(a: T[]) {
  return a[0];
}

// TS가 타입유추하는 것이 좋으나
// 아래 <boolean>처럼 사용자가 명시할 수 있음
// 타입이 불일치하면 에러 발생
//const a = superPrint<boolean>([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false]);
const e = superPrint([1, 2, true, "hello"]);

// call signature외에 Generic의 다른 사용 방법 #2
// 아래 1,2,3번 코드는 표현 방법만 다르고 결과 동일
type Player<E> = {
  name: string;
  extraInfo: E;
};
/*
// 1번
const son: Player<{ hobby: string }> = {
  name: "son",
  extraInfo: {
    hobby: "coding",
  },
};
*/

/* 
// 2번
// type을 한 번 더 선언
type SonPlayer = Player<{ hobby: string }>;

const son: SonPlayer = {
  name: "son",
  extraInfo: {
    hobby: "coding",
  },
};
*/

// 3번
// type을 2번 선언
type SonExtra = {
  hobby: string;
};

type SonPlayer = Player<SonExtra>;

const son: SonPlayer = {
  name: "son",
  extraInfo: {
    hobby: "coding",
  },
};

// 변경되는 타입이 있다고 하면 any가 아닌
// Generic을 사용
const nancy: Player<null> = {
  name: "Nancy",
  extraInfo: null,
};

// TS 타입의 대부분은 Generic으로 생성
// 팝업의 Array 설명부: interface Array<T>~
type A = Array<number>;

let a: A = [1, 2, 3];

function printAllNumbers(arr: number[]) {}
// or
function printAllNumbers2(arr: Array<number>) {}
