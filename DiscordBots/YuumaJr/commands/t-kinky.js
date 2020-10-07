module.exports = {
	name:'kinky',
	description: '1/1000 to respond "kinky" to a message',
	execute(message) {

		var num = Math.round(Math.random() * 100);
	
		if (!message.author.bot && num == 50){
			message.channel.send('Kinky');
		}
	}
}