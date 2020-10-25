module.exports = {
	name: 'mira',
	description: 'sends an image of the miraHQ map',
	execute (message) {
		message.channel.send({files: ['./images/miraHQ.jpg']});
	}
}