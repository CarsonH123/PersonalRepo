module.exports = {
	name:'pong',
	description: 'this is a ping command',
	execute(message) {
		message.channel.send('Pong!');
	}
}