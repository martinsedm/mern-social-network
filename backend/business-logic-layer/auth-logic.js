require("../data-access-layer/dal");
const  UserModel = require("../models/user-model");

 function getExistUserAsync(email) {
    return UserModel.findOne({ email }).exec();

}

function addUserAsync(user){
    return user.save();
}

function findUserByIdAsync(_id){
    return UserModel.findById(_id)
}



module.exports = {
    getExistUserAsync,
    addUserAsync,
    findUserByIdAsync
};
