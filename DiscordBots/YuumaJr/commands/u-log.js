module.exports = {
	name:'log',
	description: 'debug tool',
	execute() {
		message.channel.send('Logged!');
		console.log('--- Log ---');
	}
}