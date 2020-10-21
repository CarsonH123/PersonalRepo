module.exports = {
	name: 'alive',
	description: 'adds a player to the alive array from the dead array',
	execute(message, player, alivePlayer, deadPlayer, playerNick) {

		var i = new Number(0);
		while (alivePlayer[i] != null) {
			if (alivePlayer[i] == message.member.id) {
				message.channel.send("You're already alive!");
				return;
			}
			i++;
		}

		message.channel.send("You have been revived!");

		message.guild.members.cache.get(message.member.id).setNickname("[A] " + playerNick[i]);

		alivePlayer[i] = message.member.id;
		
		//removing player id from deadPlayer array
		i = 0;
		while(deadPlayer[i] != message.member.id) i++;
		deadPlayer.splice(i, 1);

	}
}