const mongoose = require('mongoose');
const WhoSchema = require('./who-schema');
const WhoModel = mongoose.model('WhoModel', WhoSchema);
module.exports = WhoModel;
