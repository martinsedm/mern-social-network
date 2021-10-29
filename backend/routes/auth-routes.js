const express = require("express");
const {register, login, currentUser,forgotPassword
,profileUpdate,findPeople} = require("../controllers-layer/auth-cotroller");
const {requireSignIn} = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/register", register);
router.post("/login",login)
router.post("/forgot-password",forgotPassword)
router.get("/current-user",requireSignIn, currentUser)

router.put('/profile-update', requireSignIn, profileUpdate);
router.get('/find-people',requireSignIn, findPeople);

module.exports = router;
