#!/usr/bin/env node

var hey = require('../lib/index.js');

let args = process.argv.slice(2);
let cmd = args.join(' ');

hey.ho(cmd);
