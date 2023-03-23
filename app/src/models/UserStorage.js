"user strict";

const { stringify } = require("querystring");

const fs = require("fs").promises;

// 클래스 내 변수 선언 시 const 등의 변수 선언자 필요X
class UserStorage {
    // 가독성을 위해 따로 캡슐화한 메소드 (일반 getUserInfo와 다르다)
    // private 메소드는 맨 위에 작성한다.
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        // Object.keys(users) === [id, password, name]
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) { // use ... when you don't know how many parameters would be input (it's array)
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true); // true means 모든 값을 가져오겠다.
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON,stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;