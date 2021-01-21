module.exports =
{
	name: 'okaylistadd',
	description: 'adding to the okay list',
	execute(message, args) {
		if (!args[0]) return message.reply('You need to tell me what to add to the exceptions list!');

		const fs = require('fs');

		fs.appendFileSync('fine.txt', args[0] + '\n');

	},
};
