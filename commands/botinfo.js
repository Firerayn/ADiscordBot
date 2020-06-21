const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'botinfo',
		this.alias = ['bi'],
		this.usage = '!!botinfo';
	}

	async run(bot, message) {
		const boticon = bot.user.displayAvatarURL;
		const botembed = new Discord.MessageEmbed()
			.setDescription('Bot Information')
			.setColor('#42e8f4')
			.setThumbnail(boticon)
			.addField('Bot Name', bot.user.username)
			.addField('Bot Create Date', bot.user.createdAt)
			.addField('Servers', bot.guilds.cache.size);
		await message.delete();
		message.channel.send(botembed).catch(console.error);
	}
};