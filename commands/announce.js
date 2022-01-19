const { MessageEmbed } = require("discord.js")
module.exports = {
name: "announce",
aliases: ['anc'],
cooldown: '10',
usage: 'zannounce [channel] [text]',
description: `Send an embed to a specify channel`,

    run: async (client, message, args) => {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>");

        if(!args.length) return message.reply(`Use the correct usage
<a:DS_sultan:807981420214747187>**zhelp announce**`)

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply(`Use the correct usage
<a:DS_sultan:807981420214747187> **zhelp announce**`);

        if(!args[1]) return message.reply(`Use the correct usage
<a:DS_sultan:807981420214747187> **zhelp announce**`);

            const embed = new MessageEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor('RANDOM')
                .setFooter(`Announce`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
                .setTimestamp()
                channel.send(embed)
    }
}