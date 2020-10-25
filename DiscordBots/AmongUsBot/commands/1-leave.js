module.exports = {
	name: 'leave',
	description: 'removes a player from all arrays',
	execute(message, player, alivePlayer, deadPlayer, playerNick) {
		
			member = message.guild.members.cache.get(message.member.id)
			var nickname = member ? member.displayName : null;

			var joined = false;
			for (var i = 0; i < 10; i++){

			if (player[i] == message.member.id) {
				player.splice(i, 1);
				message.channel.send("Left!");

				//nickname management
				message.guild.members.cache.get(message.member.id).setNickname(playerNick[i]);
				playerNick.splice(i, 1);

				joined = true;
			} 

			if (alivePlayer[i] == message.member.id) {
				alivePlayer.splice(i, 1);
			}

			if (deadPlayer[i] == message.member.id) {
				deadPlayer.splice(i, 1);
			}

		}

		if (!joined) message.channel.send("You have not joined!");
		
	}
}