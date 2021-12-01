const WhoModel = require('./who-model');

const findAllWho = () => WhoModel.find();


module.exports = {
	findAllWho
}