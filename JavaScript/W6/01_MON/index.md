# 0509

## 01. npm

npm은 **N**ode **P**ackage **M**anager의 약어로, Node.js에서 Module(예시: [`lite-server`](https://www.npmjs.com/package/lite-server), [`passport`](https://www.npmjs.com/package/passport)(sns 로그인) 등)을 사용할 때 주로 활용한다.

```ps
npm init
```

### `package.json`

세부 설정을 마치면 `package.json`이 생성된 것을 확인할 수 있다. `package.json`에 모든 npm 패키지들이 정의된다.

```json
{
  "name": "nodejs",
  "version": "0.0.1",
  "description": "node practice",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### `package.json`의 `scripts`

`scripts`에서 명령어를 추가할 수 있다. 프로젝트 개발을 진행하다보면 특정 명령어를 활용해서 test, lint, build 등 반복적으로 수행해야 하는 작업들이 생기는데, 이때 `scripts`에 등록해 활용하면 간편하고 쉽게 사용할 수 있다. `scripts`에 등록된 모든 명령어는 `npm run` 명령어를 통해 확인할 수 있다.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "lite-server"
},
```

### `npm install`

```ps
npm install
```

`npm install` 명령어를 통해 특정 모듈을 설치할 수 있다.

이때 `package.json` 파일 내에 설정된 `dependencies` module이 설치되지 않았다면 모두 설치되고, `node_modules` 디렉토리가 생성되고, 필요한 파일이 설치된다. 또한, `package-lock.json` 파일이 생성되는데, `package.json` 두 가지 파일을 통해 협업 시 module을 쉽게 공유할 수 있게 된다.

`-g, --global` 옵션을 활용해 전역에서 설치할 수도 있다. 참고로 서버는 서비스를 운영하게 되는데 해당 서버 운영을 위해 접속 관리, 다중 접속 관리가 중요하므로 pm2, forever 등의 운영을 위한 package를 주로 전역적으로 설치한다.

우리는 `package.json`에서 프로젝트가 어떤 패키지를 활용하고 있는지를 확인할 수 있다.

- `dependencies`: 실제 서버와 개발 환경에서 모두 활용하는 것.
- `devDependencies`: 개발 환경에서만 활용하는 package. (`--save-dev` 옵션으로 설치)
  다만, Docker로 인해 가상 개발 환경이 활성화되면서, `devDependencies`는 유명무실해지는 추세이다.

> package.json

```json
{
  "name": "nodejs",
  "version": "0.0.1",
  "description": "node practice",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```

### `npm remove`

해당 명령어로 특정 package를 제거할 수 있다.

```ps
npm remove
```

### [lite-server](https://www.npmjs.com/package/lite-server)

```ps
npm i lite-server
```

`scripts`에서 시작 명령어를 추가할 수 있다.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "lite-server"
},
```

다음 명령어를 통해 `lite-server`를 시작할 수 있다.

```ps
npm start
```

다만, `http://localhost:3000/`이 열리면, 에러가 발생한다. 해당 에러는 `404 get 에러`로, `404 GET /index.html, 404 GET /favicon.ico`가 존재하지 않기 때문이다.

`index.html`을 생성한 후 다시 서버를 재시작하면 제대로 에러 없이 시작되는 것을 알 수 있다.

> 추후 설명 - Status Code: 200(정상), 404(에러), 500(읽어야 할 파일이 존재하지 않음(경로 에러 등))
> **Status Code**를 잘 확인하는 것이 중요하다!

## Module

라이브러리라고도 불리는 module은 중복되는 기능이나 지속적으로 활용해야 하는 기능을 반복적으로 사용할 수 있게끔 만드는 코드를 말한다.

### Module 만들어보기

> module.exports.내보내는 이름 = 작성된 이름;

이러한 형식을 통해 만들어낸 모듈을 다른 파일에서 불러와 활용할 수 있다.

> calc.js

```javascript
function add1(a, b) {
  return a + b;
}

module.exports.add = add;
```

> app.js

```javascript
const calc = require("./calc");
// calc.js 처럼 확장자를 끝까지 작성하지 않아도 된다.

console.log(calc.add(10, 20));
```

```ps
node app
```

해당 명령어를 통해 JavaScript 파일을 실행할 수 있다.

### module을 내보내는 다른 방법

객체로도 내보낼 수 있다.

> calc.js

```javascript
module.exports = {
  add1: add,
  sub: sub,
  mul: mul,
  div: div,
};
```

단순히 함수만이 아니라 숫자, 문자열 등 변수를 내보낼 수도 있다.

> func.js

```javascript
let number = 0;

module.exports = number += 1;
```

추가적인 기능(1 더하기 등)을 활용해 내보내면서 적용할 수 있다. 다만, 같은 기능을 여러번 중복적으로 활용하고자 한다해도 이러한 방식으로는 사용할 수 없다.

`require`의 특성상 한 번 호출된 후 바로 삭제한다. 따라서 기능을 반복적으로 활용할 수는 없다. 즉, for 반복문에서 10번 호출되고 삭제되기 때문에 1이 계속 출력된다.

> app.js

```javascript
const func = require("./func");

for (let i = 0; i < 10; i++) {
  console.log(func);
}
```

다만, 함수로 내보내는 경우 삭제되지 않고 남아있기 때문에 중복된 기능을 활용할 수 있게 된다.

> func.js

```javascript
let number = 0; // 기능을 공유하기 때문에 number도 자연스럽게 활용이 가능하다.

module.exports = () => {
  return (number += 1);
};
```

> app.js

```javascript
const func = require("./func");

for (let i = 0; i < 10; i++) {
  // console.log(func);
  console.log(func());
}
```

## [Express.js](https://expressjs.com/)

```ps
npm install express-generator -g
```

해당 명령어로 설치할 수 있다.

```ps
express --view=ejs myfirstapp
```

보통 Node.js 템플릿 엔진으로 `ejs`, `pug` 중 하나를 사용하곤 한다. 보통 ejs는 기존 HTML과 문법이 흡사하여 사용하기 쉽다는 장점이 있어 선택한다. 다만, pug의 경우 새로운 문법을 배워야 하지만, 간소화되는 코드와 컴파일 후 렌더링되는 방식으로 인해서 높은 생산성을 자랑한다.([ejs GitHub](https://github.com/mde/ejs), [참고](https://jeong-pro.tistory.com/65), [pug 홈페이지](https://pugjs.org/api/getting-started.html))

`myapp` 프로젝트 디렉토리를 생성하고, 이후 이동한 후 `npm install`을 통해 npm을 설치한다. 다음으로 `npm start`로 프로젝트를 시작할 수 있다.

`http://localhost:3000/`에 접속해 확인할 수 있다. 또한, `http://localhost:3000/users`에 접근해 respond with a resource를 확인할 수 있다.

커멘드에서 보면 메서드와 주소, status code 등을 확인할 수 있다.

> GET /users 200 1.368 ms - 23

웹의 핵심은 요청(request)에 의해 응답(response)하는 것인데, get 이후의 형태를 미들웨어라고 한다. 즉, router.get(경로, (요청, 응답, 다음으로 갈지말지 여부) => {[기능](https://expressjs.com/ko/4x/api.html#app)})을 보여준다.

Express의 핵심은 좀 더 큰 Router인 middleware이다. 즉, 요청에 따라 response를 보내는 역할로, 다음 코드에서 function이 미들웨어이다.

미들웨어는 라우터가 아님

요청이 왔을 때 일어나는 기능을 처리하는 것이 미들웨어이다.

```javascript
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
```

쉽게 간단한 기능을 만들 수 있는 것이 장점이지만, 페이지가 많아질수록 미들웨어를 지속적으로 만들어야 한다는 점이 단점이다.

서버를 재시작하면 콘솔에도 찍히고, 화면에도 렌더링된다.

test express
GET /call 200 7.309 ms - 15

node의 장점: 싱글 쓰레드 기반으로 빠르게 처리할 수 있다.

```javascript
router.get("/", (req, res, next) => {
  console.log("test express");
  res.send("Hello, Express!");
  next(); // 현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결해주는 역할을 담당.
});

// 다음 미들웨어?
router.get("/", function (req, res, next) {
  console.log("2nd express");
});

module.exports = router; // ==> app.js로
```

test express
2nd express
GET /call 304 6.062 ms - -

이렇게 잘 나온다

```javascript
router.get("/", (req, res, next) => {
  console.log("test express");
  console.log("2nd express");
  res.send("Hello, Express!");
  next(); // 현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결해주는 역할을 담당.
});
```

이렇게 해도 되는데 왜 두개로 나눠서 써야하는지?

-> 미들웨어가 끊기지 않고 다음 동작을 원활하게 진행할 수 있기 위해 next를 활용한다. next는 콜백을 끊어주는 느낌으로, 더 간결하고 동기적으로 작성하기 위해 쓴다.

예를들어 소모임, 문토, 소셜링 신청 시 신청은 끝나지만, 그 다음 동작이 중요하다. 따라서, 미들웨어가 끊기지 않고 계속 동작을 할 수 있게 연결해주는 역할을 한다.

```javascript
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // 404 이후에도 진행해야 하기 때문에 next 활용
});
```

API 문서
함수
post -> url/test/member/:id
이떄 id는 회원의 id, DB 키로 한다.

`:` 뭐가 들어가도 사용할 수 있게끔 변수로 만들어 받겠다.

<https://trends.google.co.kr/trends/explore?q=프로그래밍&geo=KR>

한국에서 검색하고 있다는 의미로 geo=KR

q => 데이터 베이스를 동작하는 것

이게 get 기능

id로 이렇게 get 할 수 있음
