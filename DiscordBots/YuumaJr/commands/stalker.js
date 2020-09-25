module.exports = {
	name:'stalker',
	description: 'stalks someone',
	execute(message, args, state, ID) {

		if (state) {
			message.channel.send(':green_circle: Stalking Enabled :green_circle:');
			message.channel.send('Stalking ' + ID);

		}else {
			message.channel.send(' :red_circle: Stalking Disabled :red_circle: ');
			message.channel.send('No longer stalking ' + ID);
		}
		
	}
}