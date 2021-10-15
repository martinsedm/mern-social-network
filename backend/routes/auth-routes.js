const express = require("express");
const {register, login, currentUser} = require("../controllers-layer/auth-cotroller");
const router = express.Router();

router.post("/register", register);
router.post("/login",login)
router.get("/current-user",currentUser)


module.exports = router;
