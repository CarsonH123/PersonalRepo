module.exports = {
	name:'disconnect',
	description: 'disconnected bot from voice chat',
	execute(message, client) {
		if (message.member.voice.channelID != null) {
			var channel = client.channels.cache.get((message.member.voice.channelID).toString());

			// channel.leave();
			
		} 
	}
}