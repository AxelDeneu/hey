# Hey!

Get a notification when this boring command is done! (yes, "hey!" is the name of my package, don't blame me...).
If you're having some issues with my tool or if you want to add somes features, open an issue ;)

## Features

```
- Notification on process ending.
```
```
- Windows, Mac and Linux compatible.
```
```
- Web interface with process logging.
```

## Getting Started

You probably already been waiting for a command to end. Man, we are in 2018 atm, get notified when your command is done! 

### Installing

This package is an npm package. You just need to install it globally.

```
npm install -g @adeneu/hey
```
or if you use yarn
```
yarn global add @adeneu/hey
```

## Running the tests

Simply write the command you to run with "hey" behind it.
It will run your command as a normal command but send you a desktop notification when it's done.

For example

```
hey ls
```

If you want to see the WEB interface. Simply run th following command :

```
hey web
```

You can now access to `127.0.0.1:3000` to see the WEB interface.
You need to keep the CMD window open with this command running to keep the web server alive.

## Built With

* [node-notifier](https://github.com/mikaelbr/node-notifier) - A Node module for notifications
* [express](https://github.com/expressjs/express) - A Web Framework
* [nedb](https://github.com/louischatriot/nedb) - A JS Database

## Authors

* **Me** - *Initial work* - [AxelDeneu](https://github.com/AxelDeneu)

## License

This project is licensed under the MIT License
