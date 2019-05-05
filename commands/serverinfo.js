const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'serverinfo',
            this.alias = ['si'],
            this.usage = '!!serverinfo'
          }

    async run(bot, message, args) {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#42e8f4")
  .setThumbnail(sicon)
  .addField("Servername", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You joined", message.member.joinedAt)
  .addField("Total members", message.guild.memberCount);

  message.channel.send(serverembed);
}
}
