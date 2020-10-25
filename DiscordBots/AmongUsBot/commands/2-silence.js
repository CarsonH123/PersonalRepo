module.exports = {
	name: "silence",
	description: "deafens all living players",
	execute(message, alivePlayer, deadPlayer, client) {

		if (client.channels.cache.get(message.member.voice.channelID) == null) {
			message.channel.send("You are not in a voice chat!");
			return;
		}

		message.channel.send("Silencing...");

		var i = new Number(0);
		var quietInterval = setInterval(function quiet() {
			
			if(alivePlayer[i] != null) {
				message.guild.members.cache.get(alivePlayer[i]).voice.setMute(true);
				message.guild.members.cache.get(alivePlayer[i]).voice.setDeaf(true);

				message.channel.send("Deafened and Muted User " + alivePlayer[i]);
			}

			if (deadPlayer[i] != null) {
				message.guild.members.cache.get(deadPlayer[i]).voice.setMute(false);
				message.guild.members.cache.get(deadPlayer[i]).voice.setDeaf(false);

				message.channel.send("Unmuted User " + deadPlayer[i]);
			}

			if(alivePlayer[i] == null && deadPlayer[i] == null) clearInterval(quietInterval);

			i++;
		}, 1000);
		
		

		i = 0;
		

	}
}