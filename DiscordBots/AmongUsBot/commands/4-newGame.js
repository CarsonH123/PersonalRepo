module.exports = {
	name: 'newGame',
	description: 'restarts all arrays',
	execute(message, player, alivePlayer, deadPlayer, playerNick) {
		
		// for(var i = 0; i < 10; i++) {
		// 	if (player[i] != null) {
		// 		message.guild.members.cache.get(player[i]).setNickname(playerNick[i]);

		// 		message.guild.members.cache.get(player[i]).voice.setMute(false);
		// 		message.guild.members.cache.get(player[i]).voice.setDeaf(false);
		// 	}

		// 	player[i] 		= null;
		// 	alivePlayer[i] 	= null;
		// 	deadPlayer[i] 	= null;
		// 	playerNick[i] 	= null;
		// }

		var i = new Number(0);
		var quietInterval = setInterval(function quiet() {

			message.guild.members.cache.get(player[i]).setNickname(playerNick[i]);

			message.guild.members.cache.get(player[i]).voice.setMute(false);
			message.guild.members.cache.get(player[i]).voice.setDeaf(false);
			
			player[i]			= null;
			alivePlayer[i] 		= null;
			deadPlayer[i] 		= null;
			playerNick[i]	 	= null;

			
			if(player[i+1] == null) clearInterval(quietInterval);
			else i++;
		}, 1000);
		
		message.channel.send("Game restarted!");
	}
}