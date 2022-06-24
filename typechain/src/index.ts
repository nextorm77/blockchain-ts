/*
// tsconfig.json > target 버전에 따라 컴파일 JS 코드가 달라짐
// 화살표 함수, 클래스, const 유무 등

const hello = () => "hi";

class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}
*/

//
// 함수의 call signature(타입 정의) 출력 및 자동 완성
//localStorage.getItem("xx");

// JS 외부 모듈(./myPackage.js)과
// 해당 타입 정의 파일(./myPackage.d.ts) 작성

// JS 모듈 호출: npm의 node_module 인 것처럼 'myPackage' 모듈 호출
//import { init, exit } from "myPackage";

// JS 파일 호출: 'myPackage.js' 실제 파일 호출 => tsconfig.json > "allowJs": true 설정 필요
// 사전작업: ./myPackage.d.ts 파일 제거
// JS파일(옛날 코드)와 TS코드(최근 코드)를 혼용 가능
// 대용량(수천 줄의) JS 파일인 경우 그대로 사용
// 하지만 TS의 최소한의 보호 가능 => JSDoc 이용
import { init, exit } from "./myPackage";

init({
  debug: true,
  url: "htpp://test.com",
});

exit(1);
