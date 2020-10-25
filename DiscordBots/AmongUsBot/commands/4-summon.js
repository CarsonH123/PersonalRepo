module.exports = {
	name: 'summon',
	description: 'summons bot into voice chat',
	execute(message, client) {

		if (client.channels.cache.get(message.member.voice.channelID) == null) {
			message.channel.send("You are not in a voice chat!");
			return;
		}

		message.channel.send("Summoned!");

		channel = client.channels.cache.get((message.member.voice.channelID).toString());
		channel.join()
		.then(connection => {
			connection.voice.setSelfMute(true);
			connection.voice.setSelfDeaf(true);
		});

	}
}