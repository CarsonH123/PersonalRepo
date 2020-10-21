module.exports = {
	name: "voting",
	description: "Undeafens all living players, mutes ghosts",
	execute(message, alivePlayer, deadPlayer, client) {

		if (client.channels.cache.get(message.member.voice.channelID) == null) {
			message.channel.send("You are not in a voice chat!");
			return;
		}

		channel = client.channels.cache.get((message.member.voice.channelID).toString());
		channel.join();

		message.channel.send("Voting time!");

		var i = new Number(0);
		while(alivePlayer[i] != null) {
			message.guild.members.cache.get(alivePlayer[i]).voice.setMute(false);
			message.guild.members.cache.get(alivePlayer[i]).voice.setDeaf(false);
			i++;
		}

		i = 0;
		while(deadPlayer[i] != null) {
			message.guild.members.cache.get(deadPlayer[i]).voice.setMute(true);
			message.guild.members.cache.get(deadPlayer[i]).voice.setDeaf(false);
			i++;
		}


	}
}