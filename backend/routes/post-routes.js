const express = require("express");
const {createPost} = require("../controllers-layer/post-controller");
const {requireSignIn} = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/create-post",requireSignIn, createPost);



module.exports = router;
