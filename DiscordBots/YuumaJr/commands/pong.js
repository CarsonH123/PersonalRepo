module.exports = {
	name:'pong',
	description: 'this is a ping command',
	execute(message, args) {
		message.channel.send('Pong!');
	}
}