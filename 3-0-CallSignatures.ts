// call signature는 마우스를 함수명 위에
// 두었을 때 보이는 인수 및 반환값?
// 함수 구현이 아님

/*
function add(a: number, b: number) {
  return a + b;
}
*/
//const add = (a: number, b: number) => a + b;

/* 함수의 call signature
type Add = (a: number, b: number) => number;
// 이제 타입을 명시할 필요 X
const add: Add = (a, b) => a + b;
const add2: Add = (a, b) => {
  a + b;
};
*/
