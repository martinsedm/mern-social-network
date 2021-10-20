import Post from "../models/post-model";
import expressJwt from "express-jwt"


export const requireSignIn = expressJwt({
    secret: config.JWT_SECRET,
    algorithms: ["HS256"],
})

export const canEditDeletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params._id);
        if (req.user._id != post.postedBy) {
            return res.status(400).send("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
};
