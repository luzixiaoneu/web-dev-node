const mongoose = require('mongoose');
const ProfileSchema = require('./profile-schema');
const ProfileModel = mongoose.model('ProfileModel', ProfileSchema);
module.exports = ProfileModel;
