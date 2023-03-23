"user strict";

const { stringify } = require("querystring");

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        // promise 객체 생성: 안에 있는 db 쿼리 성공 시 relove, 실패 시 reject 실행
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;"; // ?에 [id]가 들어간다. (보안상 취약한 "~ WHERE id = " + id 대신 사용)
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`); // err이 Object이므로, 문자열로 만들어준다.
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;