const TweetModel = require('./tweet-model');
const ObjectId = require('mongodb').ObjectId
const findAllTweets = () => TweetModel.find();

const createTweet = (tweet) => TweetModel.create(tweet).then(res => console.log(res));

const deleteTweet = (id) => TweetModel.deleteOne({_id : id});

// const updateTweet = (id, tweet) => TweetModel.updateOne({_id: id},
// 		{$set: {liked: true}});

const updateTweet = (id, tweet) => TweetModel.updateOne({_id: id},
	{$set: tweet}).then(res => console.log(res));





module.exports = {
	findAllTweets, createTweet, deleteTweet, updateTweet
};




