module.exports = {
	name: 'roster',
	description: 'lists all players currently playing',
	execute(message, player) {

		if (player[0] == null) {
			message.channel.send("No one has joined!");
			return;
		}
		
		var rosterMsg = new String("__**Joined Users (" + player.length + "/10):**__\n");

		for(var i = 0; i < player.length; i++) {
			rosterMsg += "<@" + player[i] + ">\n";
		}

		message.channel.send(rosterMsg);
	}
}