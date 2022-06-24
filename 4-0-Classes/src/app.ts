/* 일반 Class
class Player {
  // 아래처럼 코딩하면 JS에서 해당 프로퍼티와 연결되도록 컴파일
  // 컴파일된 JS 코드 확인하면 알 수 있음
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const son = new Player("Snoo", "Son", "Nextorm");

// son.firstName; // TS 오류 발생, but JS는 문제없음(private 개념X)
// son.nickName; // TS 정상 체크(public)
*/

// abstact class: 다른 클래스가 상속받을 수 있는 클래스
// but 직접 인스턴스를 생성X(시도하면 오류 발생)
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  // 접근 제어자가 없으면 public
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // 추상 메소드 생성시 call signature만 코딩
  // 상속받은 클래스(Player)에서 구현하도록 TS에서 강제함
  abstract getNickName(): string;
}

class Player extends User {
  // 추상 메소드 구현
  getNickName(): string {
    // nickName이 private라면 접근 오류
    return this.nickName;
  }
}

const son = new Player("Snoo", "Son", "Nextorm");
// son.getFullName(); // private이므로 에러
son.getNickName();
