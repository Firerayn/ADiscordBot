const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'roles',
		this.alias = ['ri'],
		this.usage = '!!roles';
	}

	async run(bot, message) {
		const sicon = message.guild.iconURL;
		const rolesembed = new Discord.RichEmbed()
			.setDescription('Roles')
			.setColor('#42e8f4')
			.setThumbnail(sicon)
			.addField('Roles abc...');

		message.channel.send(rolesembed);
	}
};