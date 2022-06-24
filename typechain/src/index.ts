// blockchain: block이 사슬처럼 엮여있는 것
// 블록안에는 블럭체인으로 보호하고 싶은 데이터가 있음
// 블럭간 연결고리는 해쉬(그 볼럭의 고유 서명?)값
// 해쉬값은 결정론적?: 어떤 입력값의 해쉬는 언제나 동일 값이 나옴

import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
