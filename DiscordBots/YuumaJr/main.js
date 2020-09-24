const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';
var stalkerState = new Boolean(false);
var code = new String('');

const fs = require('fs');
const { createInterface } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Client Running');
});

client.on('message', message => {
	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();
	
	client.commands.get('kinky').execute(message);

	//commands NOT requiring prefix
	if (message.content.startsWith('@everyone') || message.content.startsWith('@here')) {

		client.commands.get('snitch').execute(message, args);

	} else if (stalkerState && message.member.id == 451479359115624468n) {

		message.channel.send('Hello Friend');

	}

	if(!message.content.startsWith(prefix) || message.author.bot) return; //tests for prefix

	//commands requiring prefix
	if (command === 'log'){

		client.commands.get('log').execute(message, args);

	} else if (command == 'ping') {

		client.commands.get('pong').execute(message, args);

	} else if (command == 'stalker' && message.member.id == 425741773361512449n) {

		stalkerState = !stalkerState;
		client.commands.get('stalker').execute(message, args, stalkerState);

	} else if (command.startsWith('addcode')) {

		code = command.slice(8, 20);
		code = code.toUpperCase();
		client.commands.get('addcode').execute(message, args, code);

	} else if (command == 'code') {
		message.channel.send(code);
	}
}); 


client.login('NzU4NTAyODk0NTQ2MDU5Mjc0.X2v43g.memxivjzhn3IpyhCvCRtx77Nr3Q'); //end