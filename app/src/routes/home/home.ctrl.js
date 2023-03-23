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
            
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다"
        });
    }
};

module.exports = {
    output,
    process
};