/* unknown
let a: unknown;
//let b = a + 1; // 오류
if (typeof a === "number") {
  let b = a + 1;
}
// a.toUpperCase(); // 자동완성 X
if (typeof a === "string") {
  a.toUpperCase();
}
*/

/* void
// void는 리턴타입 명시할 필요X
function hello() {
  console.log("x");
}
const a = hello();
a.toUpperCase(); // 오류
*/

// never
// 함수가 never 리턴~
/*
function hello(): never {
  // return "x"; // 오류
  throw new Error("xx"); // 리턴하지 않고 오류 발생

}
*/
function hello(name: string | number) {
  if (typeof name === "string") {
    name; // string
  } else if (typeof name === "number") {
    name; // number
  } else {
    name; // never, never 실행되지 않음
  }
}
