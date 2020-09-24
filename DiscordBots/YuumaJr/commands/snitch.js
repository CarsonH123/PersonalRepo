module.exports = {
	name:'snitch',
	description: 'snitches on @everyone @here, @nickname-role, and @DJ pings',
	execute(message, args) {
		message.channel.send('Snitching...');

		user = message.member;
		user = user.toString();
		message.channel.send(user + ' pinged');
	}
}