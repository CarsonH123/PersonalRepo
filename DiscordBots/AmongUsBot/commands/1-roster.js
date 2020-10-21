module.exports = {
	name: 'roster',
	description: 'lists all players currently playing',
	execute(message, player) {

		if (player[0] == null) {
			message.channel.send("No one has joined!");
			return;
		}
	
		message.channel.send("__**Joined Users:**__ \n");
	
		i = 0;
	
		while (player[i] != null){
			message.channel.send("<@" + player[i] + ">");
			i++;
		}

	}
}