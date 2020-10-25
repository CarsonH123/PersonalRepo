module.exports = {
	name: 'dead',
	description: 'adds a player to the dead array',
	execute(message, player, alivePlayer, deadPlayer, playerNick) {

		var i = new Number(0);
		while (deadPlayer[i] != null) {
			if (deadPlayer[i] == message.member.id) {
				message.channel.send("You're already dead!");
				return;
			}
			i++;
		}

		message.channel.send("You have died!");

		i = 0;
		while (player[i] != message.member.id) i++;

		message.guild.members.cache.get(message.member.id).setNickname("[D] " + playerNick[i]);

		i = 0;
		while (deadPlayer[i] != null) i++;
		deadPlayer[i] = message.member.id;

		//removing id from alivePlayer array
		i = 0;
		while(alivePlayer[i] != message.member.id) i++;
		alivePlayer.splice(i, 1);

	}
}