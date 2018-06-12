var express = require('express');
var app = express();
var Datastore = require('nedb');
var db = new Datastore({filename: __dirname+'/../data.db', autoload: true});
var Twig = require('twig');
const _ = require('lodash');
var nl2br  = require('nl2br');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set("twig options", {
	strict_variables: false
});

app.get('/', (req, res) => {
	db.find({}).sort({time: -1}).exec((err, doc) => {
		var grouped = _.groupBy(doc, (n) => {
			return n.identifier;
		});
		_.forEach(grouped, (val, index) => {
			grouped[index] = _.groupBy(val, (n) => {
				return n.type;
			})
		});
		res.render('index', {
			data: grouped
		});
	})
});

app.get('/process/:identifier', (req, res) => {
	db.find({identifier: req.params.identifier}).sort({time: 1}).exec((err, doc) => {
		var grouped = _.groupBy(doc, (n) => {
			return n.type
		});
		res.render('process', {
			data: grouped,
			nl2br: nl2br
		});
	})
});

app.get('/about', (req, res) => {
	res.render('about');
})

app.listen(3000);
