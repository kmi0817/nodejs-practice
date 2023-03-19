"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; // 외부 폴더에서 router를 사용할 수 있도록 외부로 내보냄