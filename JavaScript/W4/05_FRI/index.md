# Axios API

## Axios란?

Axios는 웹 브라우저와 Node.js를 위한 HTTP 비동기(작성된 순서대로 실행되지 않는 처리) 통신 라이브러리입니다. 쉽게 말해서 백엔드와 프론트엔드 간 통신을 쉽게 하기 위해 사용되는 것으로 Ajax처럼 사용되는 것입니다. 비동기 통신 라이브러리를 사용하지 않으면 모든 코드가 순차적으로 처리되어야 하므로 코드의 순서를 신경 써서 작성해야 합니다. 즉, 코드 작성이 매우 복잡해집니다. 따라서 비동기 통신을 쉽게 해주는 Axios나 Ajax 같은 것이 자주 사용되는 것입니다.

Ajax란 비동기 자바스크립트란 의미로 Asynchronous JavaScript and XML의 약자입니다. Ajax는 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용하여 화면 전체를 새로 고침 하지 않고 변경된 일부 데이터만 로드하는 비동기 처리가 가능합니다. Axios는 Ajax와 유사하며 API를 이용한 통신을 할 때 주로 사용합니다.

Axios는 Promise를 기반으로 만들어진 라이브러리입니다. Promise는 자바스크립트 ES6에서 비동기 처리를 위해 주로 사용되는 객체입니다.

## Fetch vs Axios

Fetch와 Axios 둘 다 HTTP 요청을 처리하기 위한 자바스크립트의 라이브러리이지만 몇 가지 차이점이 존재합니다.

Fetch의 경우 자바스크립트에 내장되어 있기 때문에 별도의 import나 설치가 필요하지 않습니다. 하지만 Axios의 경우 간단하지만, 위의 사용법 설명처럼 설치 과정이 필요합니다.

Fetch는 일부 예전의 인터넷 익스플로러 버전에서 지원하지 않는 경우가 있어, Axios가 Fetch보다 브라우저 호환성이 뛰어납니다.

Fetch에서는 지원하지 않는 JSON 자동 변환, 응답 시간 초과 설정 기능 등을 Axios에서 지원해줍니다.

그렇다면 역시 더 좋아 보이는 Axios를 무조건 사용해야 할까요? 그렇지는 않습니다. axios는 외부 모듈로 따로 패키지 설치를 해줘야 사용할 수 있으니, 여의치 않다면 fetch를 사용해도 상관 없습니다.

자신의 개발 상황(지원하는 브라우저, 기타 다른 패키지 등등)에 맞는 라이브러리를 선택하는 것이 필요합니다.

학습하는 모든 기술 스택을 무조건 사용해야 하는 것은 결코 아닙니다. 배운 것을 어떤 상황에 활용해야 하는지를 염두에 두면서 학습하면 개발을 할 때 기술 스택을 선택하기에 용이합니다.

## API

API는 Application Programming Interface의 줄임말로 다양한 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 말합니다.

만약 여러분이 밥을 먹기 위해 식당을 갔다고 해봅시다. 손님인 여러분은 요리사에게 음식 주문을 해야 밥을 먹을 수 있습니다. 하지만 직접 요리사에게 말하지는 않죠. 일반적인 경우 점원을 통해 주문을 할 텐데요. 이때 점원 역할이 바로 API라고 생각하시면 됩니다. 즉, 프로그램과 프로그램을 연결해 주는 다리 역할을 하는 것이 API입니다.

## HTTP

오늘날, 여러분 모두 대부분의 정보를 인터넷으로 확인합니다. 모든 웹 브라우저에 있는 정보에 접근할 때는 URL을 통하여 접근합니다. 반대로 생각하면 URL을 모르는 정보에는 접근을 할 수 없다라는 것입니다.

위 설명이 현재 우리가 사용하는 WWW(World Wide Web) 의 기본적인 틀 입니다.

엘리스 홈페이지를 예시로 설명드리겠습니다.
<https://elice.io> → 이 URL은 엘리스의 URL입니다. URL에서 elice는 엘리스라는 곳임을 인지하지만, 그 앞에 붙은 https(http+s)는 무엇을 뜻할까요? 그리고, URL을 입력한 후 나타나는 웹페이지에 있는 모든 정보들은 다 어디서 온 것일까요?

누군가는 어떤 정보를 생성하거나 가공했을 것이고, 누군가는 그 정보를 보고 싶을 겁니다.
예를 들어 나 자신이 URL을 통해 누군가에게 해당 정보를 요청하면, 요청한 정보를 누군가가 나에게 다시 전달해줍니다.

이러한 규칙을 HTTP라고 부릅니다.

HTTP는 Hypertext Transfer Protocol의 약자입니다.

- Hypertext: 컴퓨터 화면이나 전자 기기에서 볼 수 있는 데이터이며, 다른 데이터와 연결될 수 있는 주소를 참조하고 있습니다.
- Transfer: 사람들이 브라우저를 통해 확인하는 웹 상의 데이터는 HTTP에 의해 전달됩니다.
- Protocol: 규칙 혹은 규약을 뜻합니다.

이런 HTTP 규칙을 누가 이용하고 사용할까요? 인터넷을 통해 뉴스를 확인하고, 쇼핑을 하는 우리는 직접 HTTP에 따라 행동하진 않습니다! 사용자인 우리는 URL만 알면 됩니다. 평소 우리를 생각해볼까요? 브라우저 주소창에 URL을 입력하면 그 데이터를 요청하고 보여주는 것은 브라우저의 역할입니다. 그리고 요청 받은 데이터를 가져오는 것은 웹 서버의 역할이며 HTTP는 바로 그 클라이언트와 서버 간의 규칙입니다. 이때, 클라이언트의 요청을 HTTP Request, 서버의 응답을 HTTP Response라고 합니다.

### HTTP Methods

HTTP 통신을 위해 아래와 같은 Methods를 제공합니다.

- GET 암호화되지 않은 형태의 데이터를 서버로 전송하는데 사용되는 가장 일반적인 방법
- HEAD GET과 유사한 방법으로 Response Body를 포함하지 않고 사용
- POST 특정 양식의 데이터를 암호화하여 서버로 전송하는데 사용
- PUT 특정 대상의 데이터를 갱신(Update)하는데 사용
- DELETE URL에 지정된 대상을 삭제(DELETE)하는 데 사용됩니다.

### HTTP status code

HTTP status code(응답 상태 코드)는 특정 HTTP 요청이 성공적으로 완료되었는지 알려주는 코드입니다. 총 응답은 5개의 그룹으로 나누어집니다. (상태 코드는 section 10 of RFC 2616에 정의되어 있습니다.)

- 응답: 100
- 성공적인 응답: 200
- 리다이렉트: 300
- 클라이언트 에러: 400
- 서버 에러: 500

예를 들어, 우리가 가끔 알 수 없는 URL로 들어갔을 때, 404 Error 가 나오는 페이지를 많이 목격했을 것입니다.

더 알고 싶다면? → MDN Web Docs HTTP Status code

API, HTTP 메소드에 대한 설명은 이후에 지속적으로 다룰 예정이니, 우선은 한 번 읽어보고 Axios를 이용해 API를 다루는 방법을 익혀보는 시간을 가져보세요.

## Axios와 CRUD

index.html에 아래 두 스크립트를 추가해주면 axios 라이브러리를 손쉽게 사용할 수 있습니다.

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

CRUD가 Create, Read, Update, Delete의 제일 앞 문자를 하나씩 따와 만든 줄임말로 각각은 아래처럼 매칭이 됩니다.

- C : Create(생성) - POST

  ```javascript
  axios.post(url, data 객체)
  ```

- R : Read(조회) - GET

    ```javascript
  axios.get(url)
  ```

- U : Update(수정) - PUT

  ```javascript
  axios.put(url, data 객체)
  ```

- D : Delete(삭제) - DELETE

  ```javascript
  axios.delete(url)
  ```
