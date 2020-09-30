module.exports = {
	name:'addcode',
	description: 'stores code in memory',
	execute(message, code) {
		message.channel.send('Code ' + code + ' has been saved!');
	}
}