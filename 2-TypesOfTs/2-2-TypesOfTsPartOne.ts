/* 
type Age = number;
type Name = string;
type Player = {
  name: Name;
  age?: Age;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}
// 오류 발생: 함수 테두리{}로 해석하여 변수 name만 있음, 리턴 코드X
// const playerMaker2 = (name: string): Player => {
//   name,
// };

// 아래처럼 괄호 추가하면 오류 해결
const playerMaker2 = (name: string): Player => ({ name });

const son = playerMaker("son");
son.age = 45;
const son2 = playerMaker2("son2");
son2.age = 40;
 */
