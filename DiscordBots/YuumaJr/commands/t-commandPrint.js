module.exports = {
	name: 'commandPrint',
	description: 'prints command list',
	execute(message) {
		message.channel.send(
			">>> __**Available Commands:**__\n" +
			"**Addcode [code]**: *Saves an Among-Us code to memory*\n" +
			"**Code**: *Displays currently saved Among-Us code*\n" +
			"**Ping**: *Pong!*\n" +
			"**Say [message]**: *Yuuma replies with [message], deletes trigger message*\n" +
			"**Stalker**: *Enables stalker function for user*\n\n" +

			"__**Additional Functionalities:**__\n" +
			"**Kinky**: *1% chance to reply \"Kinky\" to any message*\n" +
			"**Snitch**: *Will rat anyone out who mass pings*"
		);
	}
}