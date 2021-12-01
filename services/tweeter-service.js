const dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {


	const findAllTweets = (req, res) => {
		dao.findAllTweets().then(tweets => res.json(tweets))
	}

	const createTweet = (req, res) => {
		console.log(req.body)
		dao.createTweet(req.body)
			.then(tweets => res.json(tweets))
	}
	const deleteTweet = (req, res) => {

		dao.deleteTweet(req.params.id)
			.then((status) => res.send(status));
	}
	const likeTweet = (req, res) => {


		let tweet = req.body;

		if (tweet.liked === true) {
			tweet.liked = false;
			tweet.stats.likes--;
		} else {
			tweet.liked = true;
			tweet.stats.likes++;
		}


		dao.updateTweet(req.params['id'], tweet)
			.then((status) => {
				res.send(status)
			})
	}

	app.put('/rest/tweets/:id/like', likeTweet);
	app.delete('/rest/tweets/:id', deleteTweet);
	app.post('/rest/tweets', createTweet);
	app.get('/rest/tweets', findAllTweets);
};
