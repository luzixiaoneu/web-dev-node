
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev').then(r => console.log("Connected To Database"));


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});


app.get('/hello', (req, res) => {
	res.send('Test 12345!');
});

require('./services/movies-service')(app);
require('./services/tweeter-service')(app);
require('./services/profile-service')(app);
require('./movies/service')(app);
require('./services/who-service')(app);
require('./services/profile-service-a8')(app);
require('./services/tweeer-service-a8')(app);
app.listen(process.env.PORT || 4000);