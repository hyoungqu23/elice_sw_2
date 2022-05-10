# 0510

## npm

온라인 저장소와 커맨드라인 도구로 구성된 npm은 Node Package Manager의 약어로, Node.js 프로젝트를 관리하는 필수적인 도구이다. 온라인 저장소에는 수많은 오픈소스 라이브러리와 도구들이 업로드 되어, 필요하다면 손쉽게 검색해 프로젝트에 추가할 수 있다. 또한, 프로젝트 관리를 위한 다양한 명령어(저장소에서 라이브러리, 도구를 설치, 프로젝트 설정하고 관리, 프로젝트 의존성 관리 등)를 제공한다.

## npm 명령어

npm 커맨드라인 도구의 사용법을 알고 있어야 한다.

### 프로젝트 생성

```command
npm init
```

프로젝트 디렉토리 내부에서 해당 명령어를 활용하면 프로젝트 관련 정보들이 저장되는 `package.json` 파일을 만들어주고, 이 디렉토리는 Node.js 프로젝트가 된다. `package.json` 파일을 직접 수정하거나 npm 명령어를 통해 프로젝트 정보(버전, 이름, 설명, 스크립트, 의존성 패키지 등)를 수정할 수 있다.

#### dependencies

프로젝트 내에서 사용하는 라이브러리를 의미한다. 즉, 프로젝트가 실행되기 위해 외부 라이브러리에 의존하므로, dependencies를 관리해야 한다.

#### 라이브러리

라이브러리란 특정 기능을 수행하는 코드의 묶음을 의미하는데, 복잡한 기능들을 직접 작성하지 않고 효율성을 위해 다른 사람이 구현한 해당 기능을 불러와 사용하는 것이다. Node.js에서는 패키지라고도 부른다.

### 프로젝트 dependencies 관리(라이브러리 설치)

```command
npm install
```

프로젝트 dependencies를 관리하기 위해 해당 명령어를 활용한다. 축약형인 `npm i`로도 가능하다. 이는 사용하는 옵션에 따라 여러 용도로 사용할 수 있다. 즉, 의존성을 추가하거나 내려받거나, 개발용 의존성을 추가하거나 전역 패키지를 추가하는 등의 작업을 할 수 있다.

#### dependencies 추가

```command
npm install [package name]
```

해당 명령어를 통해 필요한 패키지를 프로젝트에 추가할 수 있다. 이렇게 추가된 패키지는 `package.json` 파일 `dependencies` 내부에 작성되고, `node_modules` 디렉토리에 저장된다.

```command
npm install [package name]@[version]
```

참고로 이때 `@[version]`을 추가해 패키지의 특정 버전을 추가할 수 있다. 버전이 올라갈수록 하위 호환성 문제가 발생할 수 있기 때문에 버전을 추가해 패키지를 지정할 수 있다.

- `@[~1.13.0]`: `1.13.x` 버전 설치
- `@[^1.13.0]`: `1.x.x` 버전 설치
- `@[0.13.0]`: `0.13.0` 버전 설치

프로젝트에 dependencies를 추가하면 `package-lock.json` 파일이 생성되는데, 버전을 명시하지 않은 패키지는 자동으로 최신 버전으로 추가된다. 이때 이러한 패키지들의 버전이 변경되지 않도록 설치된 버전을 고정하는 역할을 하는 파일이다.

#### devDependencies

```command
npm install [package name] --save-dev
```

`--save-dev` 옵션을 추가한 명령어를 통해 배포 전까지만 사용하는 의존성으로 devDependencies를 분리하여 관리할 수 있다. `package.json` 파일 `devDependencies` 내부에 작성된다.

#### dependencies & devDependencies 내려받기

일반적으로 `node_modules` 디렉토리는 코드를 관리할 때나 배포할 때는 dependencies 추가로 인한 용량 문제와 운영체제별로 실행되는 코드의 상이함 때문에 업로드하지 않는다.

```command
npm install
```

따라서 협업 혹은 다른 사람의 코드를 받아서 실행하는 경우에 해당 명령어를 아무 옵션 없이 사용해 `package.json`의 `dependencies`와 `devDependencies` 내부에 정의되어 있는 패키지들을 `node_modules` 디렉토리에 내려받을 수 있다.

#### dependencies 내려받기

```command
npm install --production
```

프로젝트를 배포할 때는 devDependencies를 포함할 필요가 없기 때문에 해당 명령어를 활용해서 `package.json`의 `dependencies` 내부에 정의된 패키지들만 `node_modules` 디렉토리에 내려받으면 된다.

#### 전역 dependencies 추가

```command
npm install [package name] --global
```

`--global` 옵션을 통해 패키지를 전역 패키지 디렉토리에 추가할 수 있다. 주로 프로젝트에 종속되지 않는 커맨드라인 도구들(express-generator, pm2 등)을 전역 패키지로 추가하여 사용한다.

다만, 로컬 패키지를 활용해 `package.json`에 명시적으로 선언되어 있는 것이 프로젝트 관리에 더 좋다.

#### dependencies 제거

```command
npm remove [package name]
```

해당 명령어를 통해 `package.json` 파일 내의 `dependencies`, `devDependencies`, `node_modules` 디렉토리 모두에서 패키지를 삭제할 수 있다.

### 스크립트 실행

간단한 동작을 수행하는 코드로, `package.json` 파일 내의 `scripts`에 선언된 스크립트를 다음 명령어를 통해 실행할 수 있다.

```command
npm run [script name]
```

주로 의존성 패키지를 사용할 때, node_modules에 설치된 파일을 직접 실행하는 것이 아니라, 패키지의 module을 직접적으로 호출해 사용할 수 있게 해준다.

- `npm test`: 코드 유닛 테스트 등에 활용
- `npm start`: 프로젝트 실행
- `npm stop`: 프로젝트 종료