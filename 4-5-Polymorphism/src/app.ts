// Generic, 다형성, and interface를 같이 사용하여
// localStorage를 시뮬레이션하는 예

// 다형성은 다른 모양의 코드를 가질 수 있게 하는 것

// Generic은 concrete 타입이 아닌 placeholder 타입
// TS가 최종적으로 concrete 타입으로 변환
// 같은 코드를 다른 타입에 대해 쓸 수 있도록 허용

// Storage는 이미 존재(mouse on하면 확인 가능)하는 interface
// => 그대로 쓰면 확장하여 쓰게 됨
// => 다른 명칭 사용

// Generic 전달 순서: class -> interface
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    // 과제: 이미 있는 키값일 경우, 에러 출력
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

// Generic을 바탕으로 call signature 생성
stringsStorage.get("xxx");
stringsStorage.set("jack", "boy");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("nancy", true);
