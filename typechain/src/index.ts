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
//import { init, exit } from "myPackage"; // 'myPackage' 모듈 호출
// 'myPackage.js' 파일 호출 => tsconfig.json > "allowJs": true 설정 필요
import { init, exit } from "./myPackage";

// 외부 패키지 및 라이브러리의 ~.d.ts 파일이
// 없으면 함수 위로 ctrl + 클릭해도 반응이 없음
init({
  url: "true",
});

exit(1);

// 자주 마주칠 환경은 JS와 TS가 공존하는 경우
//
