const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'kick',
		this.alias = ['boot'],
		this.usage = '!!kick [@User] [reason]';
	}

	async run(bot, message, args) {

		const kUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
		if (!kUser) return message.channel.send('Couldn\'t find user.');
		const kReason = args.join(' ').slice(22);
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No can do man.');
		if (kUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('User can\'t be kicked.');

		const kickEmbed = new Discord.RichEmbed()
			.setDescription('~Kick~')
			.setColor('#E64100')
			.addField('Kicked User', `${kUser} with ID ${kUser.id}`)
			.addField('Kicked By ', `${message.author.name} with ID ${message.author.id}`)
			.addField('Kicked from', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', kReason);

		const kickChannel = message.guild.channels.cache.find(channel => channel.name === 'Incidents');
		if (!kickChannel) return message.channel.send('Can\'t find Incidents channel.');

		await message.delete();
		message.guild.member(kUser).kick(kReason);
		kickChannel.send(kickEmbed);
	}
};