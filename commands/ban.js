const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'ban',
            this.alias = ['byebye'],
            this.usage = '!!ban [@User] [reason]'
          }

    async run(bot, message, args) {

let bUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Couldn't find user.");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do man.");
if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("User can't be baned.");

let banembed = new Discord.RichEmbed()
.setDescription("~Ban~")
.setColor("#FF0101")
.addField("baned User", `${bUser} with ID ${bUser.id}`)
.addField("banned By" `${message.author.id} with ID ${message.author.id}`)
.addField("baned from", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", bReason);

let banChannel = message.guild.channels.find(`name`, "Incidents");
if(!banChannel) return message.channel.send("Can't find Incidents channel.");

message.delete().catch(O_o ={});
message.guild.member(bUser).ban(bReason);
banChannel.send(banEmbed);
}
}
