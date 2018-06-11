var express = require('express');
var app = express();
var Datastore = require('nedb');
var db = new Datastore({filename: __dirname+'/../data.db', autoload: true});

app.get('/', (req, res) => {
	db.find({}, (err, doc) => {
		console.log(err);
		console.log(doc);
	})
});

app.listen(3000);
