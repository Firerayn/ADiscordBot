const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'report',
		this.alias = ['rep'],
		this.usage = '!!report [@User] [reason]';
	}

	async run(bot, message, args) {

		const rUser = message;

		if (!rUser) return message.channel.send('Couldn\'t find user.');

		const reason = args.join(' ').slice(22);

		const reportEmbed = new Discord.MessageEmbed()
			.setDescription('Reports')
			.setColor('#42e8f4')
			.addField('Reported User', `${rUser}with ID: ${rUser.id}`)
			.addField('Reported By', `${message.author} with ID: ${message.author.id}`)
			.addField('Channel', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', reason);

		const reportchannel = message.guild.channels.cache.find(channel => channel.name === 'reports');
		await message.delete();
		if (!reportchannel) {
			return message.channel.send('Can\'t find reports channel.');
		}

		message.reportchannel.send(reportEmbed);

		return;
	}
};