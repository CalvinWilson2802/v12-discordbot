const discord = require("discord.js")
require("discord-reply");
const client = new discord.Client();

module.exports = {
name: "eval",
aliases: [`ev`],
cooldown: '2',
run: async (client, message, args) => { 
 
 let user = ['768378164942471188'];
	if (!user.includes(message.author.id)) {
		return message.reply(`You're not this bot owner <a:DS_adogelele:819922349641695292>`);
	}

	const clean = text => {
		if (typeof text === 'string')
			return text
				.replace(/`/g, '`' + String.fromCharCode(8203))
				.replace(/@/g, '@' + String.fromCharCode(8203));
		return text;
	};
	try {
		const code = args.slice().join(' ');
		let evaled = eval(code);

		if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

		message.channel.send(clean(evaled), { code: 'xl' });
	} catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
	}
}
};