module.exports =
{
	name: 'banlistadd',
	description: 'adding to the ban list',
	execute(message, args) {
		if (!args[0]) return message.reply('You need to tell me what to add to the banlist!');

		const fs = require('fs');

		fs.appendFileSync('del.txt', args[0] + '\n');

	},
};
