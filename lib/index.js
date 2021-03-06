
const exec = require('child_process').exec;
const notifier = require('node-notifier');
const Datastore = require('nedb');
const fs = require('fs');
const dbfile = __dirname+'/data.db';
if(!fs.existsSync(dbfile)) {
	fs.writeFileSync(dbfile, '');
}
var db = new Datastore({filename: dbfile, autoload: true});
const uuid = require('uuid/v4');

var ho = function execCommand(cmd) {
	let identifier = uuid();

	db.insert({
		cmd: cmd,
		time: new Date(),
		type: 'start',
		text: '',
		identifier: identifier
	}, (err, el) => {
		id = el._id;
	});

	spawnCmd = exec(cmd, {
		encoding: 'UTF-8'
	});
	
	spawnCmd.stdout.on('data', (data) => {
		console.log(data);
		db.insert({
			cmd: cmd,
			time: new Date(),
			type: 'data',
			text: data.toString(),
			identifier: identifier
		});
	});

	spawnCmd.stderr.on('data', (data) => {
		console.log(data);
		db.insert({
			cmd: cmd,
			time: new Date(),
			type: 'error',
			text: data.toString(),
			identifier: identifier
		});
	});

	spawnCmd.on('exit', function(code) {
		notifier.notify({
			'title': "Hey!",
			'message': "Your process : '" + cmd + "' is done!",
			'sound': 'ding.mp3',
		});
		db.insert({
			cmd: cmd,
			time: new Date(),
			type: 'exit',
			text: '',
			identifier: identifier
		});
	});
}

exports.ho = ho;
