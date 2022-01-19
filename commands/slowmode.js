const Discord = require('discord.js');

module.exports = {
name: "slowmode",
cooldown: '2',
  description: "Gives slowmode to a specify channel",
  usage: "zslowmode [time]",

  async run (client, message, args){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>");
    if(!args[0]) return message.reply('Give a valid time <:MadDog:772035115966529537>');
    if(isNaN(args[0])) return message.channel.send('Give a valid time <:MadDog:772035115966529537>');

    message.channel.setRateLimitPerUser(args[0])

    message.channel.send(`Succesfull to change slowmode to \`${args[0]}\` seconds <a:DS_kekjoget:852430100397948938>`).then(m => m.delete({ timeout: 5000 }))

  }
}