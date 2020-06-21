const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'source',
		this.alias = ['so'],
		this.usage = '!!source';
	}

	async run(bot, message) {

		try {
			await message.delete();
		}
		catch (e) {
			const messageembed2 = new Discord.RichEmbed()
				.setDescription('~Error~')
				.setColor('#E64100')
				.addField('Error', 'Message could not be deleted.');
			message.channel.send(messageembed2);
		}

		const attachment = new Discord.Attachment('https://github.com/Firerayn/ADiscordBot/archive/master.zip');

		message.channel.send('This is the latest commit of this bots\' source.');
		message.channel.send(attachment);

	}
};