require("../data-access-layer/dal");
const  User = require("../models/user-model");

 function getExistUserAsync(email) {
    return User.findOne({ email }).exec();

}

function getExistUserByEmailAndSecretAsync(email,secret) {
    return User.findOne({ email, secret}).exec();

}

function findUserByIdAndUpdatePasswordAsync(_id, newHashedPassword){
     return User.findByIdAndUpdate(_id, {password: newHashedPassword}).exec();
}

function findUserByIdAndUpdateDataAsync(_id, data){
     return User.findByIdAndUpdate(_id, data, {new: true}).exec();
}

function addUserAsync(user){
    return user.save();
}

function findUserByIdAsync(_id){
    return User.findById(_id).exec()
}

function findUsersForFollowingAsync(following){
     return User.find({_id: {$nin: following}}).select('-password -secret').limit(10).exec();
}

function addFollowingAsync(_id, user_id){
    return User.findByIdAndUpdate(_id,{
        $addToSet: {following: user_id},
    }).select("-password -secret").exec()
}

function addFollowerAsync(user_id, _id){
    return User.findByIdAndUpdate(user_id,{
        $addToSet: {followers: _id},
    },{new: true}).exec()
}





module.exports = {
    getExistUserAsync,
    addUserAsync,
    findUserByIdAsync,
    getExistUserByEmailAndSecretAsync,
    findUserByIdAndUpdatePasswordAsync,
    findUserByIdAndUpdateDataAsync,
    findUsersForFollowingAsync,
    addFollowingAsync,
    addFollowerAsync
};
