/* 
// 컴파일된 JS에는 접근 제어자가 없음
// abstract 개념은 TS에만 있음
// abstract class는 상속(extends)만 가능, 직접 인스턴스(new)는 불가능
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  protected getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  abstract getNickName(): void;
}

class Player extends User {
  getNickName(): void {
    // protected는 인스턴스 밖에서 사용X
    this.getFullName();
    console.log(this.nickName);
  }
}

const son = new Player("Snoo", "Son", "Nextorm");

// protected는 선언 클래스와 상속받은 클래스내에서만 사용 가능
son.firstName;
son.getFullName(); 

son.getNickName();
 */

// 응용: 해쉬맵

// 클래스를 타입처럼 사용
class Word {
  constructor(public readonly term: string, public def: string) {}
  // 과제: 단어의 정의 추가, 수정, 단어 출력 메소드 구현
  // 단어 정의 수정
  updateDef(def: string) {
    this.def = def;
  }
  // 단어 정의 추가
  addDef(def: string) {
    this.def = `${this.def}. ${def}`;
  }
  // 단어 정보 출력
  print() {
    console.log(`단어명: ${this.term}\n정의: ${this.def}`);
  }
}

type Words = {
  // 키 명칭이 정해지지X, 타입이 string
  // 제한된 범위의 프로퍼티를 정할 때 사용
  [key: string]: string;
};
/*
let dict: Words = {
  "1": "food",
  "2": "peach",
  "3": "orange",
};
*/

class Dict {
  // 생성자에서 직접 초기화X 프로퍼티를 작성할 경우
  // 생성자를 수동으로 작성
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 클래스를 타입처럼 사용
  // 클래스 인스턴스로 정보를 받지만
  // 내부 저장시 Words 타입(문자열 쌍)으로 처리
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  // 과제: 단어 삭제, 단어 업데이트
  // 단어 수정
  updateWord(term: string, def: string) {
    this.words[term] = def;
  }
  // 단어 삭제
  deleteWord(term: string) {
    // 어떻게 Words 요소를 삭제?
  }
  // JS 문법
  static hello() {
    return "hello~";
  }
}

const kimchi = new Word("kimchi", "한국 음식");
kimchi.term; // .term은 public, 읽을 수 있음
kimchi.term = "none"; // .term은 public이면서 readonly => 변경은 불가능
kimchi.updateDef("Korean food");
kimchi.addDef("한국의 전통 음식");
kimchi.print();

Dict.hello(); // static 함수
const dict = new Dict();

dict.add(kimchi);
dict.updateWord("kimchi", "배추를 발효한 음식");
console.log(dict.def("kimchi"));
