module.exports = {
	name: 'commands',
	description: 'lists all commands',
	execute(message) {
		message.channel.send(
		"```\nCommands (Prefix \'+\')\n\n"+
		"join:     		Joins you to the game session\n" +
		"leave:    		Removes you from the game session\n" +
		"roster:   		Lists all currently joined players\n" +
		"status:   		Lists life status of all currently joined players\n" +
		"silence:  		Deafens and mutes living players\n" +
		"voting:   		Mutes dead players\n" +
		"alive:    		Sets your life status to alive\n" +
		"dead:			 Sets your life status to dead\n" +
		"newGame:  		Restarts player roster\n" +
		"skeld/mira/polus: Sends an image of the map" +
		"```"
		);
	}
}