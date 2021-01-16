const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='!';

// run node
client.once('ready',()=>{
  console.log('Anti-Degen Bot is online!')
})

//code here
client.on('message', message =>{
  if(message.content.includes("lib")){
      if(message.content.includes("equilibrium")||message.content.includes("library")) return;

  else  {
      message.delete();
      message.channel.send('do not speak');
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

});

client.login('ODAwMDg3NzQ2ODM2Mjk5ODE3.YANBxw.nIsFfn5MmP6CAySKwezS9nSA6CE');
