const chalk = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
	command  : 'add',
	describe : 'Add a note',
	builder  : {
		title : {
			describe     : 'Note title',
			demandOption : true,
			type         : 'string'
		},
		body  : {
			describe     : 'Note body',
			demandOption : true,
			type         : 'string'
		}
	},
	handler  : function (argv) {
		console.log('Title: ', argv.title);
		console.log('Body: ', argv.body);
	}
});

yargs.command({
	command  : 'remove',
	describe : 'Remove',
	handler  : function () {
		console.log('removing');
	}
});

yargs.command({
	command  : 'list',
	describe : 'list',
	handler  : function () {
		console.log('listing all notes');
	}
});

yargs.command({
	command  : 'read',
	describe : 'Read',
	handler  : function () {
		console.log('reading');
	}
});

yargs.parse();
