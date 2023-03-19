"use strict";

const app = require("../app"); // app.js 가져오기
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`localhost:${PORT} runs`);
}); // listen 명령어로 3000q번 포트에서 서버 띄우기