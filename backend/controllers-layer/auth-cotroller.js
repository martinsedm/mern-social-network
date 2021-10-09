import {hashPassword} from "../helpers/auth-helper";

const  UserModel = require("../models/user-model");
const authLogic = require("../business-logic-layer/auth-logic");
const { hashedPassword, comparePassword } = require("../helpers/auth-helper.js");

export const register = async (req, res) =>{

    const {name, email, password, secret} = req.body;
    //validate params from body.
    if(!name) return res.status(400).send("Name is required");
    if(!password || password.length < 6) return res.status(400)
        .send("Password is required and should be at least 6 characters.");
    if(!secret) return res.status(400).send("Answer is required");

    //verify the user not exist.
    const exist = await authLogic.getExistUserAsync();
    if(exist) return res.status(400).send("Email already in use.");

    //hash salted the password.
    const hashedPassword = await hashPassword(password);

    const user = new UserModel({name, email, password: hashedPassword, secret});
    try{
        await authLogic.addUserAsync(user);
        console.log("REGISTERED USER =>" + user);
        return res.json({
            ok: true,
        })
    }
    catch(err){
        console.log("REGISTER FAILES => ", err);
        return res.status(400).send("Error occurred. Please try again.")
    }

}
