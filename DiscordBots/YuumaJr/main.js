const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

client.once('ready', () => {
	console.log('Test');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();

	if(command === 'ping') {
		message.channel.send('Pong!');
	}
}); 

client.login('NzU4NTAyODk0NTQ2MDU5Mjc0.X2v43g.egqATYkAuSyyji4kYJhL_N1aEbA'); //end