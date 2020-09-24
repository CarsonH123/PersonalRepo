module.exports = {
	name:'log',
	description: 'debug tool',
	execute(message, args) {
		message.channel.send('Logged!');
		console.log('--- Log ---');
	}
}