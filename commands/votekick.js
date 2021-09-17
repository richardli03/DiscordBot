module.exports =
{
	name: 'votekick',
	description: 'this is a votekick function!',
	execute(message, args) {

		if (!message.mentions.users.first()) {
			message.delete();
			message.reply('please @ somebody in order to votekick them!');
			return;
		}

		const mentionedUser = message.mentions.users.first();
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
