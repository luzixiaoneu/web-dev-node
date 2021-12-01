const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	handle: String,
	profilePicture: String,
	bannerPicture: String,
	bio: String,
	website: String,
	coverImage: String,
	avatarImage: String,
	location: String,
	dateOfBirth: String,
	dateJoined: String,
	followingCount: String,
	followersCount: String,
	tweets: String

}, {collection: "profiles"});
module.exports = ProfileSchema;
