const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'roleadd',
            this.alias = ['ra', 'add'],
            this.usage = '!!roleadd [role]'
          }

    async run(bot, message, args) {

  let rMember = message.guild.member(message.author) || message.guild.members.get(args[0]);

  if(!rMember){
    let messageembed = new Discord.RichEmbed()
    .setDescription("~Add Role~")
    .setColor("#E64100")
    .addField("Error", "You do not exist.");

    return message.channel.send(messageembed);}

  let role = args.join(" ");

  try{
    await message.delete().catch(O_o ={});
  }catch(e){
    let messageembed2 = new Discord.RichEmbed()
    .setDescription("~Add Role~")
    .setColor("#E64100")
    .addField("Error", "Message could not be deleted.");
    message.channel.send(messageembed2);
  }

  if(!role){
    let messageembed3 = new Discord.RichEmbed()
    .setDescription("~Add Role~")
    .setColor("#E64100")
    .addField("Error", "Specifiy a Role.");
    return message.channel.send(messageembed3);}

  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole){
    let messageembed4 = new Discord.RichEmbed()
    .setDescription("~Add Role~")
    .setColor("#E64100")
    .addField("Error", "Couldn't find the role.");
    return message.channel.send(messageembed4);}


  if(rMember.roles.has(gRole.id)) {
    let messageembed5 = new Discord.RichEmbed()
    .setDescription("~Add Role~")
    .setColor("#E64100")
    .addField("Error", `${rMember}, you already have the ${gRole.name} role.`);
    return message.channel.send(messageembed5);}

  await(rMember.addRole(gRole.id));

  let messageembed6 = new Discord.RichEmbed()
  .setDescription("~Add Role~")
  .setColor("#00FF00")
  .addField("Success", `${rMember} has received the ${gRole.name} role.`);

  message.channel.send(messageembed6);

}
}
