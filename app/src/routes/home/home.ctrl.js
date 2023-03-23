"use strict";

const users = {
    id: [ "안녕1", "안녕아이디2", "안녕하슈3" ],
    password: [ "1234", "12345", "123456" ]
};

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;
        
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다";
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};