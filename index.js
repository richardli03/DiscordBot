const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='!';

// run node
client.once('ready',()=>{
  console.log('Filter Bot is online!')
})

//code here
client.on('message', message =>{
  // TODO: Needs to reference a text file that can be outputted and appended at any time by moderators. That will be the list of bannable words.
  if(message.content.toLowerCase().includes("lib")){
      if(message.content.includes("equilibrium")||message.content.includes("library")) return;
  else  {
      message.delete();
      message.channel.send('do not speak '+ `<@${message.author.id}>`);
    }
}
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  //adding the ability to splice commands
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase()


  if(command === 'hello'){
    message.channel.send('hi! I am a discord bot');
  }
  else if(command === 'rules'){
    message.channel.send('https://bit.ly/3nZ3S3v')
  }
  else if(command === 'votekick')
  {
    //
  }

});

client.login('ODAwMDg3NzQ2ODM2Mjk5ODE3.YANBxw.nIsFfn5MmP6CAySKwezS9nSA6CE');
