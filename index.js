const bottoken = require("./token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: '!!'
  });

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);
  bot.user.setActivity("paint dry.", {type: "WATCHING"});
});

bot.on("error", console.error);
bot.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot,message,args)
    }catch(e){
        console.log(e)
    }
})

bot.login(bottoken.token);
