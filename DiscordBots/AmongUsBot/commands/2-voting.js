module.exports = {
	name: "voting",
	description: "undeafens all living players, mutes ghosts",
	execute(message, alivePlayer, deadPlayer, client) {

		if (client.channels.cache.get(message.member.voice.channelID) == null) {
			message.channel.send("You are not in a voice chat!");
			return;
		}

		message.channel.send("Voting time!");

		var i = new Number(0);
		var talkInterval = setInterval(function quiet() {
			
			if(alivePlayer[i] != null) {
				message.guild.members.cache.get(alivePlayer[i]).voice.setMute(false);
				message.guild.members.cache.get(alivePlayer[i]).voice.setDeaf(false);

				message.channel.send("Undeafened and unmuted User " + alivePlayer[i]);
			}

			if (deadPlayer[i] != null) {
				message.guild.members.cache.get(deadPlayer[i]).voice.setMute(true);
				message.guild.members.cache.get(deadPlayer[i]).voice.setDeaf(false);

				message.channel.send("Muted User " + deadPlayer[i]);
			}

			if(alivePlayer[i] == null && deadPlayer[i] == null) clearInterval(talkInterval);

			i++;
		}, 1000);


	}
}