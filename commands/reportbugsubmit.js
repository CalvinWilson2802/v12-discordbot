const discord = require('discord.js')
const db = require('quick.db')    
   
module.exports = {
name: "dm",
cooldown: '2',
description: "Send a dm to a user that reporting a bug",
usage: "zdm [user]",
async run (client, message, args){
    if(message.author.id !== '768378164942471188') return;

    let nomor = args.join(" ").split(", ")[0];
    let nomor1 = args.join(" ").split(", ")[1];
    let user = message.mentions.users.first();


    const embed = new discord.MessageEmbed()
    .setAuthor('Thanks for submiting an error! 📫')
    .addField('・Error Description',nomor)
    .addField('・Staff reply',nomor1)
    .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
    .setFooter('Sorry for the inconvenience',client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
    .setTimestamp()
    user.send(embed)
}
}
