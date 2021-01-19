module.exports =
{
  name: `votekick`,
  description: "this is a votekick function!",
  execute (message, args){
    message.channel.send('Hi i recieved your command. This is the user that will be kicked in the future: '+ args);

  }
}
