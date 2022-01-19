const { MessageEmbed } = require("discord.js");

module.exports = {
name: "unlock",
cooldown: '2',
description: "Unlocks channel that was locked!",
usage: "zunlock [channel]",

    async run (client, message, args) {
        
        if(!message.member.hasPermission('MANAGE_CHANNELS')) {

            return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>")
        }

        let channel = message.mentions.channels.first() || message.channel;

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {

            return message.reply("Channel is already unlocked <a:DS_pepeRicardo:808029595487043594> ")
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

        const embed = new MessageEmbed()
        .setAuthor(`Channel Unlocked!`,"https://image.flaticon.com/icons/png/512/61/61457.png")
        .addField(`Channel`, channel)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 })
)
        .setFooter(`Unlock`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setTimestamp();


        message.channel.send(embed)
    }
}