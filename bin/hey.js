#!/usr/bin/env node

var hey = require('../lib/index.js');

let args = process.argv.slice(2);

if(args.length > 0) {
	if(args[0] == "web") {
		hey.ho('node ' + __dirname + '/../app/web.js');
	} else {
		let cmd = args.join(' ');
		hey.ho(cmd);
	}
} else {
	console.log("Whoops! You must tell me the command you want to execute.");
}
