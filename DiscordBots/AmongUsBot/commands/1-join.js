module.exports = {
	name: 'join',
	description: 'adds a player to the roster',
	execute(message, player, alivePlayer, playerNick){

		var i = new Number(0);

		while (player[i] != null) {
			if (player[i] == message.member.id) {
				message.channel.send("You have already joined!");
				return;
			}
			i++;
		}
		
		if (i == 10) {
			message.channel.send("Game is full");
			return;
		}

		player[i] = message.member.id;
		alivePlayer[i] = message.member.id;

		//assigning current nickname to array
		member = message.guild.members.cache.get(player[i])
		var nickname = member ? member.displayName : null;
		playerNick[i] = nickname;

		//adding life status to nickname
		message.guild.members.cache.get(message.member.id).setNickname("[A] " + playerNick[i]);

		message.channel.send("Joined!");
	}
}