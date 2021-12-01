const mongoose = require('mongoose');
const TweetSchema = require('./tweet-schema');
const TweetModel = mongoose.model('TweetModel', TweetSchema);
module.exports = TweetModel;
