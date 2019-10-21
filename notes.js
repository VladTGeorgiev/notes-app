const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green('Note added'));
	} else {
		console.log(chalk.yellow('Note title taken!'));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notes.length > notesToKeep.length) {
		saveNotes(notesToKeep);
		console.log(chalk.red(`Note with title '${title}' removed`));
	} else {
		console.log(chalk.yellow('No note found'));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	notes.forEach((note) => {
		console.log(chalk.blue(`Note Nr. ${notes.indexOf(note) + 1}, title: ${note.title}`));
	});
};

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => note.title === title);

	if (foundNote) {
		console.log(chalk.blue(`Note title: ${foundNote.title}`));
		console.log(chalk.blue(`Note body: ${foundNote.body}`));
	} else {
		console.log(chalk.yellow(`No note with title '${title}' found`));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
};
