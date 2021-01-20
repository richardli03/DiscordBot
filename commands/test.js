module.exports =
{
	name: 'test',
	description: 'this is a test function!',
	execute(message, args) {
if (!message.author.id === 801303496443691049) {
			message.channel.send('nice try');
			return;
		}

		let fs = require('fs');
		let searchString = 'lib';

		fs.readFile('file.txt', function(err, content) {
			if (err) throw err;
			message.channel.send(content.indexOf(searchString) > -1 ? 'has string' : 'does not have string');

});
	},
};
