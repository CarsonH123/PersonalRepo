const { Guild, User } = require("discord.js");

module.exports = {
	name:'admin',
	description: 'gives/removes any rank the bot has perms over',
	execute(message) {
		
		roleCode = message.content.slice(6, 24)
		userIDCode = message.content.slice(25, 100);

		let member = message.mentions.members.first();
		
		if(member.roles.cache.has(roleCode)) {
			console.log('Role Removed');
			member.roles.remove(roleCode);
		} else {
			console.log('Role Added');
			member.roles.add(roleCode);
		}
		
		message.delete();
	}
}