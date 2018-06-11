var express = require('express');
var app = express();
var Datastore = require('nedb');
var db = new Datastore({filename: __dirname+'/../data.db', autoload: true});
var Twig = require('twig');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set("twig options", {
	strict_variables: false
});

app.get('/', (req, res) => {
	db.find({}, (err, doc) => {
		res.render('index.twig', {
			message: "Hello World"
		})
	})
});

app.listen(3000);
