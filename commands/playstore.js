const Discord = require('discord.js');
require("discord-reply");
const client = new Discord.Client();
const PlayStore = require('google-play-scraper');
module.exports = {
name: "playstore",
aliases: ['ps'],
cooldown: '2',
  description: "Give some playstore apps info",
  usage: "zplaystore [app name]",
  run: (client, message, args) => {
if (!args[0])
		return message.reply(
			`:x: | Command Denied : **Please Type Something To Search** - ${message.author}`
		);

	PlayStore.search({
		term: args.join(' '),
		num: 1
	}).then(Data => {
		let App;

		try {
			App = JSON.parse(JSON.stringify(Data[0]));
		} catch (error) {
			return message.reply(`No App Found !`);
		}
		let Embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setThumbnail(App.icon)
			.setURL(App.url)
			.setTitle(App.title)
			.setDescription(App.summary)
			.addField(`Price`, App.priceText, true)
			.setTimestamp()
            .setFooter('Playstore',client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")

		return message.lineReplyNoMention(Embed);
	});
  }
  }
