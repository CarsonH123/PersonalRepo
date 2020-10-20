module.exports = {
	name: "silence",
	description: "deafens all living players",
	execute(message, player, client) {

		channel = client.channels.cache.get((message.member.voice.channelID).toString());
		channel.join();

		var tester = message.guild.members.cache.get(player[0]);
		
		//DEAFEN MEMBERS OF VOICE CHAT	
	}
}