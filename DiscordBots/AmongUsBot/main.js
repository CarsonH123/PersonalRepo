const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

var player		 =	Array();
var alivePlayer	 = 	Array();
var deadPlayer	 = 	Array();
var playerNick   =	Array();

const fs = require('fs');
const { setPriority } = require('os');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Client Online');		
});

client.on('message', message => {

if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).split(/ + /);
var command = args.shift().toLowerCase();


//do not need to be joined
switch (command) {

	case 'join':
		client.commands.get('join').execute(message, player, alivePlayer, playerNick);
	break;

	case 'commands':
		client.commands.get('commands').execute(message);
		return;
	break;

	case 'skeld':
		client.commands.get('skeld').execute(message);
		return;
	break;

	case 'mira':
		client.commands.get('mira').execute(message);
		return;
	break;

	case 'polus':
		client.commands.get('polus').execute(message);
		return;
	break;

}

//Checking to see if player is already joined to the session
var joined = false;

for (var i = 0; i < 10; i++) {
	if (player[i] == message.member.id) 
		joined = true;
}
if (!joined) {
	message.channel.send("You have not joined!");
	return;
}

//need to be joined
switch (command) {

	case 'leave':
		client.commands.get('leave').execute(message, player, alivePlayer, deadPlayer, playerNick);
	break;

	case 'roster':
		client.commands.get('roster').execute(message, player);
	break;
		
	case 'status':
		client.commands.get('status').execute(message, player, alivePlayer, deadPlayer);
	break;

	case 'silence':
		client.commands.get('silence').execute(message, alivePlayer, deadPlayer, client);
	break;

	case 'voting':
		client.commands.get('voting').execute(message, alivePlayer, deadPlayer, client);
	break;
		
	case 'dead':
		client.commands.get('dead').execute(message, player, alivePlayer, deadPlayer, playerNick);
	break;
		
	case 'alive':
		client.commands.get('alive').execute(message, player, alivePlayer, deadPlayer, playerNick);
	break;
		
	case 'newgame':
		client.commands.get('newGame').execute(message, player, alivePlayer, deadPlayer, playerNick);
	break;
}

});

client.login("[redacted]"); //end