const Discord = require('discord.js');

module.exports = {
name: "howgay",
cooldown: '2',
  description: "Give a percentage of howgay is you friend 😅",
  usage: "zhowgay [user]",

    async run (client, message, args) {
        let member = message.mentions.users.first() || message.author

        let rgn = Math.floor(Math.random() * 101)

        const gayembed = new Discord.MessageEmbed()
        .setTitle('Gay Machine Generator')
        .setDescription(`${member.username} is ` + rgn + "% Gay 🏳️‍🌈")
        .setTimestamp()
        .setFooter(`Howgay`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp();

        message.channel.send(gayembed)
    }
}