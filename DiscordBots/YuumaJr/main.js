const Discord = require('discord.js');

const client = new Discord.Client();
var token = new String('zU4NTAyODk0NTQ2MDU5Mjc0.X2v43g.0W_mElcdHTB0y-wsZClcQIHI8O0');

const prefix = '+';

//initializing
var code = new String('');//Among-Us Code Storage
var sayOutput = new String('');//Storage for Say command
var stalkerState = new Boolean();//Whether Stalker-Mode is on or off
var stalkedUserID = new String('');//Multipurpose UserID storage for stalker

const fs = require('fs');
const { setPriority } = require('os');
const { createInterface } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Client Running');
	stalkerState = false;
});

client.on('message', message => {
	if(message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();
	
	//commands to run after every message
	client.commands.get('kinky').execute(message);

	
	if (stalkerState && stalkerUserID == (message.member).toString()) {
		message.channel.send('Hello Friend');
	}

	
	
	//commands NOT requiring prefix
	if (message.content.startsWith('@everyone') || message.content.startsWith('@here')) {

		client.commands.get('snitch').execute(message, args);

	}

	if(!message.content.startsWith(prefix)) return; //tests for prefix

	//commands requiring prefix
	
	if (command === 'commands'){
		
		message.channel.send(
			">>> __**Available Commands:**__\n" +
			"**Addcode [code]**: *Saves an Among-Us code to memory*\n" +
			"**Code**: *Displays currently saved Among-Us code*\n" +
			"**Ping**: *Pong!*\n" +
			"**Say [message]**: *Yuuma replies with [message], deletes trigger message*\n" +
			"**Stalker**: *Enables stalker function for user*\n\n" +

			"__**Additional Functionalities:**__\n" +
			"**Kinky**: *1% chance to reply \"Kinky\" to any message*\n" +
			"**Snitch**: *Will rat anyone out who mass pings*"
		);

	} else if (command == 'log'){

		client.commands.get('log').execute(message, args);

	} else if (command == 'ping') {

		client.commands.get('pong').execute(message, args);

	} else if (command == 'stalker') {

		

		if (!stalkerState) {
			stalkerUserID = message.member;
			stalkerUserID = stalkerUserID.toString();
		} else if (stalkerUserID != (message.member).toString()) {
			message.channel.send('Im sorry, you do not have permission to do this');
			return;
		}

		stalkerState = !stalkerState;
		client.commands.get('stalker').execute(message, args, stalkerState, stalkerUserID);

	} else if (command.startsWith('addcode')) {

		code = command.slice(8, 20);
		code = code.toUpperCase();
		client.commands.get('addcode').execute(message, args, code);

	} else if (command == 'code') {

		message.channel.send(code);

	} else if (command.startsWith('say')) {

		client.commands.get('say').execute(message);

	} else if (command.startsWith('qkzt')) {

		client.commands.get('admin').execute(message, client);

	}
}); 


client.login('N' + token); //end