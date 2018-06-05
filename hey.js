#!/usr/bin/env node

const exec = require('child_process').exec;
const notifier = require('node-notifier');

let args = process.argv.slice(2);
let cmd = args.join(' ');

function execCommand(cmd) {
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

execCommand(cmd);
