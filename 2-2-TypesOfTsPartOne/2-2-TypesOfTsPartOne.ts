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
/* 오류 발생: 함수 테두리로 해석({})하여 변수 name만 있음, 리턴 코드X
const playerMaker2 = (name: string): Player => {
  name;
};
*/
const playerMaker2 = (name: string): Player => ({ name });

const son = playerMaker("son");
son.age = 45;
const son2 = playerMaker2("son2");
son2.age = 40;
