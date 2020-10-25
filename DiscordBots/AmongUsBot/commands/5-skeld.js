module.exports = {
	name: 'skeld',
	description: 'sends an image of the skeld map',
	execute (message) {
		message.channel.send({files: ['./images/skeld.jpg']});
	}
}