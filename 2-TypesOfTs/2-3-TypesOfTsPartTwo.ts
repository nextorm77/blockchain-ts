/* 
type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });

const son = playerMaker("son");
son.age = 45;
son.name = 'so2'
 */

/* 
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1);

const names: readonly string[] = ["1", "2", "3"];
names.push("4");

const player: readonly [string, number, boolean] = ["son", 12, true];
player[0] = 1;
 */

/* 
let a: undefined = undefined;
type Player = {
  age?: number;
};
let b: null = null;
let c = []; // 현재 TS는 c: any[]라고 해석X
c[0] = 1;
 */

/* 
// any 사용시 TS 보호장치 탈출?
const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b; // 오류 발생 X
const c = [1, 2, 3, 4];
const d = true;
c + d; // 오류 발생
 */
