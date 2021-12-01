const dao = require('../db/profile/profile-dao')

module.exports = (app) => {
	const getCurrentProfile = (req, res) => {
		dao.findProfile().then(profile => res.json(profile))
	};

	app.get("/rest/profile", getCurrentProfile);



	// const updateCurrentProfile = (req, res) => {
	// 	const update = req.body;
	// 	profile.firstName = update.firstName;
	// 	profile.lastName = update.lastName;
	// 	profile.bio = update.bio;
	// 	profile.location = update.location;
	// 	profile.website = update.website;
	// 	profile.dateOfBirth = update.dateOfBirth;
	// 	res.send(profile)
	// 	console.log("body", res.body);
	// }
	// app.put("/api/profile", updateCurrentProfile);


	const updateProfileA9 = (req, res) => {

		console.log(req.body)
		dao.updateProfile(req.body._id, req.body).then(status => {
			res.send(status)
		})
	}
	app.put("/rest/profile", updateProfileA9)

};
