const Discord = require('discord.js');

module.exports = {
name: "snipe",
cooldown: '2',
  description: "Get the latest deleted message",
  usage: "zsnipe",

  async run (client, message, args) {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.reply('You want to snipe people or what? no message was deleted <a:DS_nofrog:815169579361763339>')
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    .setFooter(`#${message.channel.name}`)
    .setTimestamp();
    if(msg.image)embed.setImage(msg.image)

    message.channel.send(embed)
  }
}