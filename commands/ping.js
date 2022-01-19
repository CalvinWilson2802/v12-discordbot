const { MessageEmbed } = require('discord.js');
require("discord-reply");
module.exports = {
name: "ping",
aliases: ['p'],
cooldown: '2',
  description: "Returns Latency and API Ping",
  usage: "zping",
	cooldown: 3,
	run: async (client, message, args) => {

          const member = message.mentions.members.last() || message.member;
      const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1); 

		const msg = await message.channel.send('Pinging...');
		const Embed = new MessageEmbed()
			.setTitle('Pong!')
			.setAuthor(
				`${message.author.username}`,
				message.author.displayAvatarURL()
			)
			.setDescription(
				`⌛ Latency is **${Math.floor(
					msg.createdTimestamp - message.createdTimestamp 
				)}ms.**\n⏲️ API Ping is **${Math.round(client.ws.ping)}ms.**`
			)
			.setColor(member.displayHexColor || "GRAY");
			message.channel.send(Embed);
		msg.edit('\u200b');
	}
};