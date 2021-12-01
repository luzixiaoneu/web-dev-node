const mongoose = require('mongoose');
const WhoSchema = mongoose.Schema({
	avatarIcon: String,
	userName: String,
	handle: String
}, {collection: "who"});
module.exports = WhoSchema;

