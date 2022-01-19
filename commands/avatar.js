const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
aliases: ['ava','profile','av'],
cooldown: '2',
usage: "zavatar [user]",
description: 'Get some user display picture',

    
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        const avatar = member.displayAvatarURL({ dynamic: true, size: 1024 })

        const embed = new MessageEmbed()
        .setTitle(`${member.tag}\'s Avatar`)
        .setImage(avatar)
        .setFooter(`Avatar`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp();

        message.channel.send(embed)
    }
}