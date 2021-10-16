const  UserModel = require("../models/user-model");
const logic = require("../business-logic-layer/auth-logic");
const { hashPassword, comparePassword } = require("../helpers/auth-helper.js");
import jwt from "jsonwebtoken";

export const register = async (req, res) =>{

    const {name, email, password, secret} = req.body;
    //validate params from body.
    if(!name) {
        return res.json({
            error: "Name is required"
        })
    }
    if(!password || password.length < 6) {
        return res.json({
            error: "Password is required and should be at least 6 characters."
        })
    }
    if(!secret) {
        return res.json({
            error: "Answer is required"
        })
    }

    //verify the user not exist.
    const exist = await logic.getExistUserAsync(email);
    if(exist) {
        return res.json({
            error: "Email already in use."
        })
    }

    //hash salted the password.
    const hashedPassword = await hashPassword(password);

    const user = new UserModel({name, email, password: hashedPassword, secret});
    try{
        await logic.addUserAsync(user);
        return res.json({
            ok: true,
        })
    }
    catch(err){
        console.log("REGISTER FAILED => ", err);
        return res.status(400).send("Error occurred. Please try again.")
    }

}

export const login = async(req, res) =>{
    try{
        const {email, password} = req.body;

        const user = await logic.getExistUserAsync(email);
        if(!user) {
            return res.json({
                error: "User not found."
            })
        }

        //check password with the hashed password
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.json({
                error: "Wrong password."
            })
        }

        //creating jwt web token for the logged user.
        const token = jwt.sign({_id: user._id}, config.JWT_SECRET, {expiresIn: "1d"});

        user.password = undefined;
        user.secret = undefined;
        res.json({
            token,
            user,
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Error. Please Try Again.");
    }
}

export const currentUser = async(req,res)  =>{
    try{
        const user = await logic.findUserByIdAsync(req.user._id);
        // res.json(user);
        res.json({ok:true});
    }
    catch(e){
        console.log(e);
        res.sendStatus(400);
    }
}

export const forgotPassword = async (req, res, next) => {
    console.log(req.body);
    const { email, newPassword, secret } = req.body;
    // validation
    if (!newPassword || newPassword.length < 6) {
        return res.json({
            error: "New password is required and should be at least 6 characters long",
        });
    }
    if (!secret) {
        return res.json({
            error: "Secret is required",
        });
    }
    let user = await logic.getExistUserByEmailAndSecretAsync(email, secret);
    if (!user) {
        return res.json({
            error: "We cant verify you with those details",
        });
    }

    try {
        const hashed = await hashPassword(newPassword);
        await logic.findUserByIdAndUpdateAsync(user._id, hashed);
        return res.json({
            success: "Your password were changed.",
        });
    } catch (err) {
        console.log(err);
        return res.json({
            error: "Something wrong. Try again.",
        });
    }
};

