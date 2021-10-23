const express = require("express");
const {register, login, currentUser,forgotPassword
,profileUpdate} = require("../controllers-layer/auth-cotroller");
const {requireSignIn} = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/register", register);
router.post("/login",login)
router.post("/forgot-password",forgotPassword)
router.get("/current-user",requireSignIn, currentUser)

router.put('/profile-update', requireSignIn, profileUpdate);


module.exports = router;
