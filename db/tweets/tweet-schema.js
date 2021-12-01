const mongoose = require('mongoose');
const TweetSchema = mongoose.Schema({
	liked: Boolean,
	topic: String,
	userName: String,
	verified: {type: Boolean, defaultValue: false},
	handle: String,
	title: String,
	tweet: String,
	attachments: {
		image: String
	},
	time: String,
	tweets: String,
	"logo-image": {type: String, defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'},
	"avatar-image": {type: String, defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'},
	stats: {
		comments: {type: Number, defaultValue: 0},
		retweets: {type: Number, defaultValue: 0},
		likes: {type: Number, defaultValue: 0}
	}
}, {collection: "tweets"});
module.exports = TweetSchema;
