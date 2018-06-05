
const exec = require('child_process').exec;
const notifier = require('node-notifier');

var ho = function execCommand(cmd) {
	spawnCmd = exec(cmd);
	
	spawnCmd.stdout.on('data', function (data) {
		process.stdout.write(data.toString());
	});

	spawnCmd.stderr.on('data', function (data) {
		process.stdout.write(data.toString());
	});

	spawnCmd.on('exit', function(code) {
		notifier.notify({
			'title': "Hey!",
			'message': "Your program is done!",
			'sound': 'ding.mp3',
		});
	});
}

exports.ho = ho;
