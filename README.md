# nodejs-practice

MVC, Module, OOP, ORM, ES6

1. Installation

```
npm install express --save
npm install ejs --save
npm install nodemon -g
npm install body-parser -s
npm install mysql -s
npm install dotenv -s
```

2. Run

- The command belowe is defined in package.json
- To run the server, make sure that you're on ~/nodejs-practice/app directory

```
npm start
```

3. 클래스 구분
- UserStorage: DB의 CRUD 역할
- User: 데이터의 검증 및 조작 역할