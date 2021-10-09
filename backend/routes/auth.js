const express = require("express");
const {register} = require("../controllers-layer/auth-cotroller");
const router = express.Router();

router.post("/register", register);

module.exports = router;
