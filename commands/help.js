const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'help',
		this.alias = ['h'],
		this.usage = '!!help';
	}

	async run(bot, message) {
		try {
			await message.delete();
		}
		catch (e) {
			const messageembed2 = new Discord.MessageEmbed()
				.setDescription('~Error~')
				.setColor('#E64100')
				.addField('Error', 'Message could not be deleted.');
			message.channel.send(messageembed2);
		}

		const helpembed = new Discord.MessageEmbed()
			.setDescription('~Help~')
			.setColor('#42e8f4')
			.addField('!help', 'Shows this')
			.addField('!roles', 'Shows all available roles.')
			.addField('!add', 'Sets the specified role. (!add Role)')
			.addField('!rem', 'Removes the specified role. (!rem Role)');

		message.channel.send(helpembed);
	}
};