module.exports =
{
	name: 'cleanse',
	description: 'get it off my screen!',
	execute(message, args) {

		if (!args[0]) return message.reply('you need to tell me what to cleanse!');

		let fs = require('fs');

		fs.readFile('file.txt', function(err, content) {
			if (err) throw err;
			message.channel.send(content.indexOf(args[0]) > -1 ? 'has string' : 'does not have string');

});
	},
};
