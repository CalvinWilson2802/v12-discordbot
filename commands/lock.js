const { MessageEmbed } = require("discord.js")

module.exports = {
name: "lock",
cooldown: '2',
description: "Locks a channels and disallows everyone to send messages!",
usage: "zlock [channel] [reason]",
async run (client, message, args) {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {

            return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>")
        }

        let channel = message.mentions.channels.first()

        let reason = args.join(" ") || 'Not Specified'

        if(channel) {
            reason = args.join(" ").slice(22) || 'Not Specified'
        } else (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {

            return message.reply("Channel already locked, bruh.. <a:DS_pepeRicardo:808029595487043594>")
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false })

        const embed = new MessageEmbed()
        .setAuthor(`Channel Locked!`,"https://image.flaticon.com/icons/png/512/61/61457.png")
        .addField(`Channel`, channel)
        .addField(`Reason`, reason)
        .setColor("GREEN")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 })
)
        .setFooter(`Lock`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setTimestamp();

        message.channel.send(embed)

    }
}