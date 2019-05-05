const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'help',
            this.alias = ['h'],
            this.usage = '!!help'
          }

    async run(bot, message, args) {
  try{
    await message.delete().catch(O_o ={});
  }catch(e){
    let messageembed2 = new Discord.RichEmbed()
    .setDescription("~Error~")
    .setColor("#E64100")
    .addField("Error", "Message could not be deleted.");
    message.channel.send(messageembed2);
  }

  let helpembed = new Discord.RichEmbed()
  .setDescription("~Help~")
  .setColor("#42e8f4")
  .addField("!help", "Shows this")
  .addField("!roles", "Shows all available roles.")
  .addField("!add", "Sets the specified role. (!add Role)")
  .addField("!rem", "Removes the specified role. (!rem Role)");

  message.channel.send(helpembed);
}
}
