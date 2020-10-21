module.exports = {
	name: 'status',
	description: 'lists player life status',
	execute(message, alivePlayer, deadPlayer) {

		message.channel.send("**__Living__**");
		for(var i = 0; i < 10; i++) {
			if (alivePlayer[i] == null) continue;
			message.channel.send("<@" + alivePlayer[i] + ">");
		}
		
		message.channel.send("**__Dead__**");
		for(var i = 0; i < 10; i++) {
			if (deadPlayer[i] == null) return;
			message.channel.send("<@" + deadPlayer[i] + ">");
		}

	}
}