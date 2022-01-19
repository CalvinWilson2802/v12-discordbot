const discord = require('discord.js')
const db = require('quick.db')    
   
module.exports = {
name: "whitelist",
cooldown: '2',
description: "Whitelisted a user from the blacklisted users",
usage: "zwhitelist [user]",
async run (client, message, args){
    if(message.author.id !== '768378164942471188') return;
    const user = message.mentions.users.first()
    if(!user) return message.reply("Mention a user to whitelist bruh <a:DS_pepe_ngudud:815634075092123649>")
    const Whitelisted = db.fetch(`whitelistedUsers_${user.id}`)
    if(Whitelisted == false) return message.reply("This user is already whitelisted <a:DS_nangis:822036948175814668>")
    message.reply(`Successfully removed ${user} from the blacklisted users <a:DS_ClapClap:814460654294663178>`)
    db.set(`blacklistedUsers_${user.id}`, false)
}
}