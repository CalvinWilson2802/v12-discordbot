const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
  name: "kick",
  usage: 'kick ,@user>',
  description: "kick user from the server",
  cooldown: 3,

  async run (client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`Imagine no perms <a:DS_adogelele:819922349641695292>`)
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply('I dont have permissions to kick someone <:MikeRIP:852763454146347020>')


    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!args[0]) return message.reply('Please use the right usage, `zhelp kick` <:PepeSipp:823489766770737152>')

    if(!member) return message.channel.send(`Who tf is that <:PepeWhut:779543545370771468>, i cant find that user`)
    if(!member.kickable) return message.channel.send(`You cant kick a staff member 
    <:MikeRIP:852763454146347020>`)

    if (member.id === message.author.id) return message.channel.send('You cant kick yourself <:MikeRIP:852763454146347020>')

    let reason = args.slice(1).join(" ")

    if (!reason) return message.rely('Please use the right usage, `zhelp kick` <:PepeSipp:823489766770737152>')

    member.kick({reason: reason}); 

    const embed = new Discord.MessageEmbed()
    .setDescription(`:white_check_mark: Successfully kick ${member}`)
    .setColor('GREEN')

    message.channel.send(embed)
  }

}