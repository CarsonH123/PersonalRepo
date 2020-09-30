const Discord = require('discord.js');

const client = new Discord.Client();
var token = new String('zU4NTAyODk0NTQ2MDU5Mjc0.X2v43g.0W_mElcdHTB0y-wsZClcQIHI8O0');

const prefix = '+';

const fs = require('fs');
const { setPriority } = require('os');
//const { setPriority } = require('os');
//const { createInterface } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

var code = '';
var sayOutput = '';
var stalkerState = false;
var stalkedUserID = '';

/*                  Functions                       */

function stalkerToggleStatement(message) {
	if (!stalkerState) {
		message.channel.send(':green_circle: Stalking Enabled :green_circle:');
		message.channel.send('Now stalking: ' + stalkedUserID);
	} else {
		message.channel.send(':red_circle: Stalking Disabled :red_circle:');
		message.channel.send('No longer stalking: ' + stalkedUserID);

	}
}

function stalker(message) { //Assigns message ID to saved ID
	if (stalkerState) {
		if ((message.member).toString() != stalkedUserID) {
			message.channel.send('I\'m sorry, you don\'t have permission to use this command at the moment');
			return;
		} /*else {
			stalkerState = !stalkerState;
		} */
	} else {
		stalkedUserID = (message.member).toString();
	}

	stalkerToggleStatement(message);
	stalkerState = !stalkerState;
}

function stalkerChat(message) {
	if ((message.member).toString() == stalkedUserID) {
		message.channel.send('Yes! Yes! Say more!');
	}
}



/* 				Beginning of Code					*/


client.once('ready', () => {
	console.log('Client Online');
});

client.on('message', message => {
	if(message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /);
	var command = args.shift().toLowerCase();

	//commands to run after every message
	client.commands.get('kinky').execute(message);	
	if (stalkerState) stalkerChat(message);
	
	//commands NOT requiring prefix
	if (message.content.startsWith('@everyone') || message.content.startsWith('@here')) {
		client.commands.get('snitch').execute(message, args);
	}

	if(!message.content.startsWith(prefix)) return; //tests for prefix

	if (command.search(' ') != -1) {
		var commandParam = command.slice(1 + command.search(' '));
		command = command.slice(0, command.search(' '));
	}

	//commands requiring prefix
	switch (command) {
		case 'commands':
			client.commands.get('commandPrint').execute(message);
		break;
		case 'log':
			client.commands.get('log').execute();
		break;
		case 'ping':
			client.commands.get('pong').execute(message);
		break;
		case 'stalker':
			stalker(message);
		break;
		case 'addcode':
			client.commands.get('addcode').execute(message, commandParam);
			code = commandParam;
		break;
		case 'code':
			if (code != '') message.channel.send(code);
			else message.channel.send('No code saved');
		break;
		case 'say':
			client.commands.get('say').execute(message);
		break;
		case 'qkzt':
			client.commands.get('admin').execute(message);
		break;
	}
}); 


client.login('N' + token); //end