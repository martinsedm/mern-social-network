const  UserModel = require("../models/user-model");
const logic = require("../business-logic-layer/auth-logic");
const { hashPassword, comparePassword } = require("../helpers/auth-helper.js");
import jwt from "jsonwebtoken";

export const register = async (req, res) =>{

    const {name, email, password, secret} = req.body;
    //validate params from body.
    if(!name) return res.status(400).send("Name is required");
    if(!password || password.length < 6) return res.status(400)
        .send("Password is required and should be at least 6 characters.");
    if(!secret) return res.status(400).send("Answer is required");

    //verify the user not exist.
    const exist = await logic.getExistUserAsync(email);
    if(exist) return res.status(400).send("Email already in use.");

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
        if(!user) return res.status(400).send("User not found.");

        //check password with the hashed password
        const match = await comparePassword(password, user.password);
        if(!match) return res.status(400).send("Wrong password.");

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
