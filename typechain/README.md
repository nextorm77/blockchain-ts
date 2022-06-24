# 사전 설정

## 콘솔

```bash
npm init -y
```

## package.json 수정

### "main" ~ 삭제

### 기존 "scripts" 내용 삭제

## 콘솔

### TS 설치

```bash
npm i -D typescript
```

### tsconfig.json 생성

```bash
tsc --init
```

## tsconfig.json 속성

"lib": ["ES6", "DOM"], //Specify a set of bundled library declaration files that describe the target runtime environment.

- describe the target runtime environment?

- TS에게 코드가 어디서 동작할 것인지를 알려줌 => TS는 사용할 API가 무엇인지 알게 됨으로 자동완성 기능 제공

- "ES6": ES6 환경에서 JS코드 구동

- "DOM": 이 코드는 브라우저 위에서 동작하도록 (서버쪽에서 document 객체 접근 가능?) 작성

- declaration files?

- 타입 정의는 TS가 몇몇 JS 코드와 API의 타입을 설명할 수 있도록 만들어 줌

- 타입 정의 파일은 JS 코드의 모양을 TS에게 설명해 주는 파일

"allowJs": true, /_ Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. _/

## 팁

- Ctrl을 누르고 메서드를 클릭하면 해당 ~d.ts 파일로 이동

- TS는 이런 ~d.ts를 통해 뛰어난 자동완성 기능을 제공?

## 5.5 Blocks 강의 내용

컴파일과 실행 동시

```bash
npm run build && npm start
```

위 방법은 비효율적, 빌드없이 TS 실행: ts-node 설치

```bash
npm i -D ts-node
```

소스 수정 모니터링: nodemon 설치

```bash
npm i -D nodemon
```

TS파일 수정시 자동 실행 스크립트 실행

```bash
npm run dev

```
