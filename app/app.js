"use strict"; // ECMA Script 문법 준수 명시

const express = require("express"); // express 모듈
const bodyParser = require("body-parser"); // req의 body 파싱 모듈
const dotenv = require("dotenv"); // 어떤 OS에서 개발하더라도 동일하게 환경변수를 등록하고 가져올 수 있는 모듈
dotenv.config();

const app = express(); // express 실행하여 app 변수에 할당

// Routing
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views"); // 화면 뷰 관리할 파일이 저장될 폴더 이름이 2번째 파라미터
app.set("view engine", "ejs"); // 뷰 엔진으로 ejs을 사용함
app.use(express.static(`${__dirname}/src/public`)); // 해당 경로를 정적 경로 추가
app.use(bodyParser.json()); // bodyPaser가 json 데이터 파싱하도록 명시
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use: 미들웨어를 등록하는 메소드

module.exports = app; // app을 내보낸다.