module.exports = class botinfo {
	constructor() {
		this.name = 'clean',
		this.alias = ['c100'],
		this.usage = '!!clean [number]';
	}

	async run(bot, message, args) {

		const number = args[1];
		const a = true;
		await message.delete();
		if (a) {
			message.channel.bulkDelete(number)
				.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
				.catch(console.error);
		}
		else {return;}
	}
};