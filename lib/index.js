
const exec = require('child_process').exec;
const notifier = require('node-notifier');

var ho = function execCommand(cmd) {
	spawnCmd = exec(cmd, {
		encoding: 'UTF-8'
	});
	
	spawnCmd.stdout.on('data', (data) => {
		console.log(data);
	});

	spawnCmd.stderr.on('data', (data) => {
		console.log(data);
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
