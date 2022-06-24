// myPackage가 node의 모듈인 것처럼 가정
// 누군가가 이 패키지를 GitHub과 npm에 푸시해 둔 것이고
// 우리가 이걸 설치했다고 가정
// myPackage가 node_module인 것처럼
export function init(config) {
  return true;
}
export function exit(code) {
  return code + 1;
}
