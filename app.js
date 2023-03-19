const express = require("express"); // express 모듈
const app = express(); // express 실행하여 app 변수에 할당

app.get("/", (req, res) => {
    res.send("Root Page");
});

app.listen(port=3000, () => {
    console.log(`localhost:${port} runs`);
}); // listen 명령어로 3000q번 포트에서 서버 띄우기