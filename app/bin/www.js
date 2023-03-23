"use strict";

const app = require("../app"); // app.js 가져오기
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`localhost:${PORT} runs`)
}); // listen 명령어로 3000q번 포트에서 서버 띄우기