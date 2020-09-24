module.exports = {
	name:'addcode',
	description: 'stores code in memory',
	execute(message, args, code) {
		if(code == "") {
			message.channel.send("Error, please try again");
			return;
		}
		message.channel.send('Code ' + code + ' has been saved!');
	}
}