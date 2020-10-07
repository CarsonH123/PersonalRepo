module.exports = {
	name:'summon',
	description: 'summons bot to voice chat',
	execute(message, client) {
		if (message.member.voice.channelID != null) {
			var channel = client.channels.cache.get((message.member.voice.channelID).toString());

			channel.join().then(connection => {
				message.channel.send('Joined!');
			});
			
		} 

		
		
	}
}