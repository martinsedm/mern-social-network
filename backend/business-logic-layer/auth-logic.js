require("../data-access-layer/dal");
const  UserModel = require("../models/user-model");

 function getExistUserAsync(email) {
    return UserModel.findOne({ email }).exec();

}

function addUserAsync(user){
    return user.save();
}

module.exports = {
    getExistUserAsync,
    addUserAsync
};
