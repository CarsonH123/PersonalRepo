module.exports = {
	name: 'newGame',
	description: 'restarts all arrays',
	execute(message, player, alivePlayer, deadPlayer, playerNick) {
		
		for(var i = 0; i < 10; i++) {
			if (player[i] != null) message.guild.members.cache.get(player[i]).setNickname(playerNick[i]);

			player[i] 		= null;
			alivePlayer[i] 	= null;
			deadPlayer[i] 	= null;
			playerNick[i] 	= null;
		}


		message.channel.send("Game restarted!");
	}
}