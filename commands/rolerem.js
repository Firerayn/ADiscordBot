const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'rolerem',
            this.alias = ['rr', 'rem', 'remove'],
            this.usage = '!!rolerem [role]'
          }

    async run(bot, message, args) {

    let rMember = message.guild.member(message.author) || message.guild.members.get(args[0]);

    if(!rMember){
      let messageembed = new Discord.RichEmbed()
      .setDescription("~Rem Role~")
      .setColor("#E64100")
      .addField("Error", "You do not exist.");

      return message.channel.send(messageembed);}

    let role = args.join(" ");

    try{
      await message.delete().catch(O_o ={});
    }catch(e){
      let messageembed2 = new Discord.RichEmbed()
      .setDescription("~Rem Role~")
      .setColor("#E64100")
      .addField("Error", "Message could not be deleted.");
      message.channel.send(messageembed2);
    }

    if(!role){
      let messageembed3 = new Discord.RichEmbed()
      .setDescription("~Rem Role~")
      .setColor("#E64100")
      .addField("Error", "Specifiy a Role.");
      return message.channel.send(messageembed3);}

    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole){
      let messageembed4 = new Discord.RichEmbed()
      .setDescription("~Rem Role~")
      .setColor("#E64100")
      .addField("Error", "Couldn't find the role.");
      return message.channel.send(messageembed4);}


    if(!rMember.roles.has(gRole.id)) {
      let messageembed5 = new Discord.RichEmbed()
      .setDescription("~Rem Role~")
      .setColor("#E64100")
      .addField("Error", `${rMember}, you do not have the ${gRole.name} role.`);
      return message.channel.send(messageembed5);}

    await(rMember.removeRole(gRole.id));

    let messageembed6 = new Discord.RichEmbed()
    .setDescription("~Rem Role~")
    .setColor("#FF00FF")
    .addField("Success", `${rMember} had his/her ${gRole.name} role removed.`);

    message.channel.send(messageembed6);

  }
}
