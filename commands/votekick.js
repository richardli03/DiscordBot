module.exports =
{
	name: 'votekick',
	description: 'this is a votekick function!',
	execute(message, args) {


		if (!message.mentions.users.first()) {
			message.delete();
			message.channel.send('please @ somebody in order to votekick them!');
			return;
		}
		const mentionedUser = message.mentions.users.first();
		message.channel.send(`Hi, I recieved your command. This is the user that will be kicked in the future: ${mentionedUser.username}`);
	},
};
