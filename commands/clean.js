const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'clean',
            this.alias = ['c100'],
            this.usage = '!!clean [number]'
          }

    async run(bot, message, args) {
let number = args.join(" ");
let a = false;
if(a){
  message.channel.bulkDelete(number)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
}
else return;
}
}
