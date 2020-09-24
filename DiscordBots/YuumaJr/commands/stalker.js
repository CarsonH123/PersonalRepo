module.exports = {
	name:'stalker',
	description: 'stalks someone',
	execute(message, args, state) {
		if (state) {
			message.channel.send(':green_circle: Stalking Enabled :green_circle: ');
		}else {
			message.channel.send(' :red_circle: Stalking Disabled :red_circle: ');
		}
	}
}