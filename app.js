const notes = require('./notes.js');
const yargs = require('yargs');

yargs.command({
	command: 'add',
	describe: 'Add a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler (argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler (argv) {
		notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'list',
	describe: 'list',
	handler () {
		notes.listNotes();
	}
});

yargs.command({
	command: 'read',
	describe: 'Read',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler (argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();
