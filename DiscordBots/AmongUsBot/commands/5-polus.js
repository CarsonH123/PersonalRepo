module.exports = {
	name: 'polus',
	description: 'sends an image of the polus map',
	execute (message) {
		message.channel.send({files: ['./images/polus.jpg']});
	}
}