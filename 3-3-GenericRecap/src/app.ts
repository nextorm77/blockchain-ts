/* 긴 call signature
type SuperPrint = {
  <T>(arr: T[]): T;
};
*/
// 단축 call signature
type SuperPrint = <T>(arr: T[]) => T;

// 논리적으로 any와 유사하다고 볼 수 있으나
// any 적용시 더이상 타입 보호X
//type SuperPrint = (arr: any[]) => any;

const superPrint: SuperPrint = (arr) => arr[0];

// TS는 placeholder에서 TS가 알아낸 타입으로 대체
// 함수명 위에 마우스를 올리면 각각 다른 call signature 적용 확인
// Generic은 요구한대로 call signature를 자동 생성하는 도구?

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false]);
const e = superPrint([1, 2, true, "hello"]);

// Generic 추가
// TS는 Generic를 처음 인식했을 때와
// Generic의 순서를 기반으로 Generic의 타입을 인지
// any와 전혀 다름
// 요청에 따라 call signature를 생성
type SuperPrint2 = <T, M>(arr: T[], b: M) => T;

const superPrint2: SuperPrint2 = (arr) => arr[0];

const f = superPrint2([1, 2, 3, 4], 1);
const g = superPrint2([true, false, true], "x");
const h = superPrint2(["a", "b", "c"], true);
const i = superPrint2([1, 2, true, false], 3);
const j = superPrint2([1, 2, true, "hello"], "Hi");
