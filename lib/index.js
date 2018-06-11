
const exec = require('child_process').exec;
const notifier = require('node-notifier');
var Datastore = require('nedb');
var db = new Datastore({filename:  __dirname+'/../data.db', autoload: true});

var ho = function execCommand(cmd) {
	spawnCmd = exec(cmd, {
		encoding: 'UTF-8'
	});
	
	spawnCmd.stdout.on('data', (data) => {
		console.log(data);
		db.insert({
			cmd: cmd,
			time: new Date(),
			type: 'ok',
			text: data.toString()
		});
	});

	spawnCmd.stderr.on('data', (data) => {
		console.log(data);
		db.insert({
			cmd: cmd,
			time: new Date(),
			type: 'ok',
			text: data.toString()
		});
	});

	spawnCmd.on('exit', function(code) {
		notifier.notify({
			'title': "Hey!",
			'message': "Your process : '" + cmd + "' is done!",
			'sound': 'ding.mp3',
		});
	});
}

exports.ho = ho;
