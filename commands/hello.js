module.exports =
{
	name: 'hello',
	description: 'this is a greeting!',
	execute(message, args) {
		message.channel.send('hi! I am a discord bot');
	},
};
