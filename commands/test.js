module.exports =
{
	name: 'test',
	description: 'test',
	execute(message, args) {

		let reason = message.channel.send(`voting to kick ${mentionedUser.username}`);
		message.react('🇾')
			.then(()=>message.react('🇳'));

		const filter = (reaction, user) => {
			return ['🇾', '🇳'].includes(reaction.emoji.name) && user.id === message.author.id;
		};

		message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '🇾') {
					message.reply('you reacted with a yes.');
				}
				else {
					message.reply('you reacted with a no.');
				}
			})
			.catch(collected => {
				message.reply('you reacted with neither yes nor no.');
			});


	},
};
