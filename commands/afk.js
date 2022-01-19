const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'afk',
  cooldown: '3',
  usage: 'zafk [reason]',

  run: async (client, message, args) => {

    const content = args.join(" ")
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
    message.channel.send(`I set you AFK: ${content}`)
  }
}