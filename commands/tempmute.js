const Discord = require('discord.js');

module.exports = class botinfo {
	constructor() {
		this.name = 'tempmute',
		this.alias = ['tm'],
		this.usage = '!!tempmute [@User] [time(s/m/h/d)]';
	}

	async run(bot, message, args) {

		const tmpmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if (!tmpmute) return message.reply('Couldn\'t find user.');
		if (tmpmute.hasPermission('MANAGE_MESSAGES')) return message.reply('User can\'t be muted');
		let muterole = message.guild.roles.find('name', 'muted');
		if (!muterole) {
			try {
				// Create Role
				muterole = await message.guild.create.createRole({
					name: 'Muted',
					color: '#000000',
					permissions: [],
				});
				// Overwrite Permissions
				message.guild.channels.forEach(async (channel) => {
					await channel.overwritePermissions(muterole, {
						SNED_MESSAGES: false,
						ADD_REACTIONS: false,
						SPEAK: false,
						MANAGE_ROLES: false,
					});
				});
			}
			catch (e) {
				console.log(e.stack);
			}
		}
		// Muting
		const mutetime = args[1];
		message.delete().catch(console.error);

		if (!mutetime) return message.reply('No time specified.');

		await (tmpmute.addRole(muterole.id));
		message.reply(`${tmpmute.id} has been muted for ${ms(ms(mutetime))}`);

		const muteembed = new Discord.RichEmbed()
			.setDescription('~Tempmute~')
			.setColor('#380bea')
			.addField('Muted User', `${tmpmute} with ID ${tmpmute.id}`)
			.addField('Muted By'`${message.author} with ID ${message.author.id}`)
			.addField('Time', message.createdAt)
			.addField('For', ms(ms(mutetime)))
			.addField('Reason', muteReason);

		const incichannel = message.guild.channels.find('name', 'Incidents');
		if (!incichannel) return message.channel.send('Can\'t find Incidents channel.');

		message.delete().catch(console.error);
		incichannel.send(muteembed);

		setTimeout(function() {
			tmpmute.removeRole(muterole.id);
			message.channel.send(`${tmpmute.id} has been unmuted.`);
		}, ms(mutetime));
	}
};