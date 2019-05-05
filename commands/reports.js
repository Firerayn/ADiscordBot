const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'report',
            this.alias = ['rep'],
            this.usage = '!!report [@User] [reason]'
          }

    async run(bot, message, args) {

let rUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("Couldn't find user.");

let reason = args.join(" ").slice(22);

let reportEmbed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#42e8f4")
.addField("Reported User", `${rUser}with ID: ${rUser.id}`)
.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
.addField("Channel", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", reason);

let reportchannel = message.guild.channels.find(`name`, "reports");
if(!reportchannel) return message.channel.send("Couldn't find reports channel.")

message.delete().catch(O_o ={});
reportchannel.send(reportEmbed);
return;
}
}
