require("../data-access-layer/dal");
const  User = require("../models/user-model");

 function getExistUserAsync(email) {
    return User.findOne({ email }).exec();

}

function getExistUserByEmailAndSecretAsync(email,secret) {
    return User.findOne({ email, secret}).exec();

}

function findUserByIdAndUpdateAsync(_id, newHashedPassword){
     return User.findByIdAndUpdate(_id, {password: newHashedPassword});
}

function addUserAsync(user){
    return user.save();
}

function findUserByIdAsync(_id){
    return User.findById(_id)
}



module.exports = {
    getExistUserAsync,
    addUserAsync,
    findUserByIdAsync,
    getExistUserByEmailAndSecretAsync,
    findUserByIdAndUpdateAsync
};
