const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


// run node
client.once('ready', ()=>{
	console.log('Filter Bot is online!');
});

// code here
client.on('message', (message) => {

	// First, we convert the data into an array for easier manipulation
	const array1 = fs.readFileSync('del.txt').toString('utf-8').split('\n');
	const array2 = fs.readFileSync('fine.txt').toString().split('\n');

	// We check to make sure that the bot is never deleting himself.
	if (message.author.bot) {return;}
	// We make sure the message author is not an admin
	else if (!message.member.roles.cache.has('801294203971305483')) {
		// Then, we test to see if the message contains anything from the banned list that's not on the exceptions list.
		for (let n = 0; n < array1.length - 1; n++) {
			if (message.content.toLowerCase().includes(array1[n]) && !array2.includes(message.content.toLowerCase())) {
				message.delete();
				message.channel.send('do not speak ' + `<@${message.author.id}>`);
				break;
			}
		}
	}


	if(!message.content.startsWith(prefix) || message.author.bot) return;
	// adding the ability to splice commands
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if(command === 'hello') {
		client.commands.get('hello').execute(message, args);
	}
	else if(command === 'rules') {
		client.commands.get('rules').execute(message, args);
	}
	else if(command === 'votekick') {
		client.commands.get('votekick').execute(message, args);
	}
	else if(command === 'ls') {
		client.commands.get('ls').execute(message, args);
	}
	else if(command === 'banlistadd') {
		client.commands.get('banlistadd').execute(message, args);
	}
	else if(command === 'okaylistadd') {
		client.commands.get('okaylistadd').execute(message, args);
	}
	else if(command === 'test') {
		client.commands.get('test').execute(message, args);
	}

});

client.login(config.token);
