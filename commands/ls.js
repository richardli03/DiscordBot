module.exports =
{
	name: 'ls',
	description: 'listing whats banned',
	execute(message, args) {
		const fs = require('fs');

		// First, we convert the data into an array for easier manipulation
		const array1 = fs.readFileSync('del.txt').toString('utf-8').split('\n');
		const array2 = fs.readFileSync('fine.txt').toString().split('\n');

		message.channel.send(`<@${message.author.id}>` + ' the following words are currently being banned: ' + array1.toString() + ' and the following words are currently exceptions: ' + array2.toString());

	},
};
