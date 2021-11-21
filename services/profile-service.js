let profile = require('../data/profile.json');

module.exports = (app) => {
	const getCurrentProfile = (req, res) => {
		res.json(profile);
	};

	app.get("/api/profile", getCurrentProfile);


	const updateCurrentProfile = (req, res) => {
		const update = req.body;
		profile.firstName = update.firstName;
		profile.lastName = update.lastName;
		profile.bio = update.bio;
		profile.location = update.location;
		profile.website = update.website;
		profile.dateOfBirth = update.dateOfBirth;
		res.send(profile)
		console.log("body", res.body);
	}
	app.put("/api/profile", updateCurrentProfile);

};
