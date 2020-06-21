const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'roleadd',
		this.alias = ['ra', 'add'],
		this.usage = '!!roleadd [role]';
	}

	async run(bot, message, args) {

		const rMember = message.guild.member(message.author) || message.guild.members.get(args[0]);

		if (!rMember) {
			const messageembed = new Discord.MessageEmbed()
				.setDescription('~Add Role~')
				.setColor('#E64100')
				.addField('Error', 'You do not exist.');

			return message.channel.send(messageembed);
		}

		const role = args.join(' ');

		try {
			await message.delete().catch(console.error);
		}
		catch (e) {
			const messageembed2 = new Discord.MessageEmbed()
				.setDescription('~Add Role~')
				.setColor('#E64100')
				.addField('Error', 'Message could not be deleted.');
			message.channel.send(messageembed2);
		}

		if (!role) {
			const messageembed3 = new Discord.MessageEmbed()
				.setDescription('~Add Role~')
				.setColor('#E64100')
				.addField('Error', 'Specifiy a Role.');
			return message.channel.send(messageembed3);
		}

		const gRole = message.guild.roles.find('name', role);
		if (!gRole) {
			const messageembed4 = new Discord.MessageEmbed()
				.setDescription('~Add Role~')
				.setColor('#E64100')
				.addField('Error', 'Couldn\'t find the role.');
			return message.channel.send(messageembed4);
		}


		if (rMember.roles.has(gRole.id)) {
			const messageembed5 = new Discord.MessageEmbed()
				.setDescription('~Add Role~')
				.setColor('#E64100')
				.addField('Error', `${rMember}, you already have the ${gRole.name} role.`);
			return message.channel.send(messageembed5);
		}

		await (rMember.addRole(gRole.id));

		const messageembed6 = new Discord.MessageEmbed()
			.setDescription('~Add Role~')
			.setColor('#00FF00')
			.addField('Success', `${rMember} has received the ${gRole.name} role.`);

		message.channel.send(messageembed6);

	}
};