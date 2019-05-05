const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
            this.name = 'clean',
            this.alias = ['c100'],
            this.usage = '!!clean [number]'
          }

    async run(bot, message, args) {

let number = args[1];
let a = true;
if(a){
    message.channel.bulkDelete(number)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
}
else return;
}
}
