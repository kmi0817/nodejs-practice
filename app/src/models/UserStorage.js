"user strict";

// 클래스 내 변수 선언 시 const 등의 변수 선언자 필요X
class UserStorage {
    // # means private variable
    static #users = {
        id: [ "안녕1", "안녕아이디2", "안녕하슈3" ],
        password: [ "1234", "12345", "123456" ],
        name: ["퐁", "퐁퐁", "퐁퐁퐁"]
    };

    static getUsers(...fields) { // use ... when you don't know how many parameters would be input (it's array)
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        // Object.keys(users) === [id, password, name]
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;