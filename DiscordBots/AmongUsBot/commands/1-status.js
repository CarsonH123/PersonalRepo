module.exports = {
	name: 'status',
	description: 'lists player life status',
	execute(message, player, alivePlayer, deadPlayer) {

		if (player[0] == null) {
			message.channel.send("No one has joined!");
			return;
		}

		var aliveStatus = new String("**__Alive Players:__**\n");
		for(var i = 0; i < alivePlayer.length; i++) {
			aliveStatus += "<@" + alivePlayer[i] + ">\n";
		}

		var deadStatus = new String("**__Dead Players:__**\n");
		for (var i = 0; i < deadPlayer.length; i++) {
			deadStatus += "<@" + deadPlayer[i] + ">\n";
		}

		message.channel.send(aliveStatus + deadStatus);

	}
}