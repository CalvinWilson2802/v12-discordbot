const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
name: "ban",
cooldown: '10',
usage: "zban [user] [reason]",
description: 'Ban someone from a server!',

  async run (client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Imagine no perms <a:DS_adogelele:819922349641695292>`)
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('I dont have permissions to ban someone <:MikeRIP:852763454146347020>')


    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!args[0]) return message.reply('Please use the right usage, `zhelp ban` <:PepeSipp:823489766770737152>')

    if(!member) return message.reply('Who tf is that <:PepeWhut:779543545370771468>, i cant find that user')
    if(!member.bannable) return message.reply(`You cant ban a staff member 
<:MikeRIP:852763454146347020>`)

    if (member.id === message.author.id) return message.reply('You cant ban yourself <:MikeRIP:852763454146347020>')

    let reason = args.slice(1).join(" ")

    if (!reason) return message.rely('Please use the right usage, `zhelp ban` <:PepeSipp:823489766770737152>')

    member.ban({reason: reason}); 

    const embed = new Discord.MessageEmbed()
    .setDescription(`:white_check_mark: Successfully banning ${member}`)
    .setColor('GREEN')

    message.channel.send(embed)
  }

}