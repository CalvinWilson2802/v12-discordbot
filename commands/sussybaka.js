const discord = require('discord.js')
const x = require("ultrax")
  
module.exports = {
name: "sussybaka",
aliases: ['sb'],
cooldown: '2',
  description: "Gives your friend avatar with sussybaka >/< effect",
  usage: "zsussybaka [user]",

  async run (client, message, args) { 
    let user = message.mentions.users.first() || message.author
    let avatar = user.displayAvatarURL({format: "png"})
    let sussybaka = new x.sussyBaka(avatar)
    const image = await sussybaka.get();
    
    message.channel.send('**Sussy baka! >/< <a:DS_unyu:824687492803330069>**', image)
}
}
