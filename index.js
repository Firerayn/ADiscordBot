const Discord = require('discord.js');
const bot = new Discord.Client();
const bottoken = require('./token.json');


bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(bottoken.token);

bot.on('ready', async () => {
	console.log(`${bot.user.username} is online.`);
	bot.user.setActivity('paint dry.', { type: 'WATCHING' });
});

const { CommandHandler } = require('djs-commands');
const CH = new CommandHandler({
	folder: __dirname + '/commands/',
	prefix: '!!' });

bot.on('error', console.error);
bot.on('message', (message) => {
	if(message.channel.type === 'dm') return;
	if(message.author.type === 'bot') return;
	const args = message.content.split(' ');
	const command = args[0];
	const cmd = CH.getCommand(command);
	if(!cmd) return;
	try{
		cmd.run(bot, message, args);
	}
	catch(e) {
		console.log(e);
	}
});