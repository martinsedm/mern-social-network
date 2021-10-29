require("../data-access-layer/dal");
const  User = require("../models/user-model");

 function getExistUserAsync(email) {
    return User.findOne({ email }).exec();

}

function getExistUserByEmailAndSecretAsync(email,secret) {
    return User.findOne({ email, secret}).exec();

}

function findUserByIdAndUpdatePasswordAsync(_id, newHashedPassword){
     return User.findByIdAndUpdate(_id, {password: newHashedPassword});
}

function findUserByIdAndUpdateDataAsync(_id, data){
     return User.findByIdAndUpdate(_id, data, {new: true});
}

function addUserAsync(user){
    return user.save();
}

function findUserByIdAsync(_id){
    return User.findById(_id)
}

function findUsersForFollowingAsync(following){
     return User.find({_id: {$nin: following}}).select('-password -secret').limit(10);
}



module.exports = {
    getExistUserAsync,
    addUserAsync,
    findUserByIdAsync,
    getExistUserByEmailAndSecretAsync,
    findUserByIdAndUpdatePasswordAsync,
    findUserByIdAndUpdateDataAsync,
    findUsersForFollowingAsync
};
