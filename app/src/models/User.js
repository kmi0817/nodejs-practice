"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const { id, password } = await UserStorage.getUserInfo(client.id);
            // getUserInfo 메소드의 반환값이 Promise 객체이므로, await으로 해당 데이터를 다 받아오도록 설정함
            // await은 async 안에서만 동작 가능하므로, login 앞에 async

            if (id) {
                if (id === client.id && password === client.password) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, err }; // key와 value가 같으면 key만 입력해도 된다.
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User;