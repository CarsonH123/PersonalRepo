module.exports = {
	name:'say',
	description: 'say something as the bot',
	execute(message) {
		
		var output = new String(message.content.slice(5, 1000));
		message.delete();

		if (output.includes('@everyone') || output.includes('@here')) {
			message.channel.send("Hey " + (message.member).toString() + ', don\'t try and make me mass ping.');
		} else if(output != '') {
			message.channel.send(output + '');
		} else {
			message.channel.send('Error, please try again');
		}
	}
}