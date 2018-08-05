### react-board-sample
react를 이용해 샘플 게시판 웹페이지를 개발합니다.

## 목차
- [Step 01](#step-01)
- [Step 02](#step-02)
- [Step 03](#step-03)
- [Step 04](#step-04)
- [Step 05](#step-05)
- [Step 06](#step-06)

## Step 01
react app의 개발환경을 구성합니다.

- Node.js v8.9.4 설치
- create-react-app 설치
```sh
npm install create-react-app
```
- 프로젝트 생성
```sh
create-react-app react-board-sample
```
- 프로젝트 구동
```sh
cd react-board-sample
npm install & npm start
```

## Step 02
기본 화면 템플릿을 구성합니다.

- App.js 변경
  - Sidebar 추가
  - Content 추가

## Step 03
테이블 HTML을 추가하고 및 bootstrap 디자인을 적용합니다.

- App.js 변경
  - 게시물 목록 Table 추가
  - bootstrap css 적용

## Step 04
페이지를 다른 파일로 분리합니다.

- NoticeList.js 추가
- App.js 변경
  - 게시물 목록 페이지 분리

## Step 05
페이지를 다른 파일로 분리하고, 파일을 import하여 표시합니다.

- Home.js 추가
- NoticeDetail.js 추가
- App.js 변경
  - Home, NoticeDetail 표시

## Step 06
react-router를 적용하여 페이지 이동을 구현합니다.

- react-router-dom 설치 
```sh
npm install --save react-router-dom
```
- App.js 변경
  - Router 적용 (https://reacttraining.com/react-router/web/example/basic)

## Step 07
게시물 목록 페이지에서 Class Component 생성자, state를 추가하고 데이터를 렌더링합니다.

- NoticeList.js 변경
  - constructor 추가
  - state 추가
  - tr 렌더링 추가


## References
- [react docs](https://reactjs.org/docs/getting-started.html)
- [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [react-router](https://reacttraining.com/react-router/web/example/basic)
