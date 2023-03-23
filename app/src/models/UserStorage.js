"user strict";

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

    static getUsers(...fields) { // use ... when you don't know how many parameters would be input (it's array)
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;