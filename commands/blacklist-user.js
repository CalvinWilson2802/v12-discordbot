const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "blacklist",
cooldown: '2',
  description: "Blacklisted a user",
  usage: "zblacklist [user]",
  run:async (client, message, args) => {
    if(message.author.id !== '768378164942471188') return;
    const user = message.mentions.users.first()
    if(!user) returnmessage.reply("Mention a user to blacklist bruh <a:DS_pepe_ngudud:815634075092123649>")
    const Blacklisted = db.fetch(`blacklistedUsers_${user.id}`)
    if(Blacklisted == true) return message.reply("This user is already blacklisted <a:DS_nangis:822036948175814668>")
    message.reply(`Successfully added ${user} to the blacklisted users <a:DS_ClapClap:814460654294663178>`)
    db.set(`blacklistedUsers_${user.id}`, true)
  }
}