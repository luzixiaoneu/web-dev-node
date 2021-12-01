const ProfileModel = require('./profile-model');

const findProfile = () => ProfileModel.find();

const updateProfile = (id, update) => ProfileModel.updateOne({_id: id},
	{$set: update}).then(res => console.log(res, 12345));
module.exports = {
	findProfile, updateProfile
};




