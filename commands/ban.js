const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'ban',
		this.alias = ['byebye'],
		this.usage = '!!ban [@User] [reason]';
	}

	async run(bot, message, args) {

		const bUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
		if(!bUser) return message.channel.send('Couldn\'t find user.');
		const bReason = args.join(' ').slice(22);
		if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send('No can do man.');
		if(bUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('User can\'t be banned.');

		const banEmbed = new Discord.RichEmbed()
			.setDescription('~Ban~')
			.setColor('#FF0101')
			.addField('banned User', '${bUser} with ID ${bUser.id}')
			.addField('banned By', '${message.author.id} with ID ${message.author.id}')
			.addField('banned from', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', bReason);

		const banChannel = message.guild.channels.cache.find(channel => channel.name === 'Incidents');
		if (!banChannel) return message.channel.send('Can\'t find Incidents channel.');

		await message.delete();
		message.guild.member(bUser).ban(bReason);
		banChannel.send(banEmbed);
	}
};
