#!/usr/bin/env node

var hey = require('../lib/index.js');
const exec = require('child_process').exec;

let args = process.argv.slice(2);

if(args.length > 0) {
	if(args[0] == "web") {
		let spawnCmd = exec('node '+__dirname+'/../app/web.js', {
			encoding: 'UTF-8'
		});
	} else {
		let cmd = args.join(' ');
		hey.ho(cmd);
	}
} else {
	console.log("Whoops! You must tell me the command you want to execute.");
}
