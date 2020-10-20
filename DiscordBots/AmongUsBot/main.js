const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

var player = Array(10);

const fs = require('fs');
const { setPriority } = require('os');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

function join(message) {

		var i = new Number(0);

		while (player[i] != null) {
			if (player[i] == message.member.id) {
				message.channel.send("You have already joined!");
				return;
			}
			i++;
		}
		
		if (i == 10) {
			message.channel.send("Game is full");
			return;
		}

		player[i] = message.member.id;

		message.channel.send("Joined!");
}

function leave(message) {

	var i = new Number(0);

	while (player[i] != null) {
	if (player[i] == message.member.id) {
		player.splice(i, 1);
		message.channel.send("Left!");
		return;
	}

	i++;
	}
	message.channel.send("You have not joined!");
	

}

function list(message) {

	if (player[0] == null) {
		message.channel.send("No one has joined!");
		return;
	}

	message.channel.send("__**Joined Users:**__ \n");

	i = 0;

	while (player[i] != null){
		message.channel.send("<@" + player[i] + ">");
		i++;
	}
}

client.once('ready', () => {
	console.log('Client Online');	
});

client.on('message', message => {

if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).split(/ + /);
var command = args.shift().toLowerCase();

switch (command) {

	case "join":
		join(message);
	break;

	case 'leave':
		leave(message);
	break;

	case 'list':
		list(message);
	break;
}

});

client.login(""); //end