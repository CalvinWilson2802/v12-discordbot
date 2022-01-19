const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports = {
name: "translate",
aliases: ['tse'],
cooldown: '2',
  description: "Translate a language",
  usage: "ztranslate [language ISO code] [word]",

  async run (client, message, args) {  
   
   
    const txt = args.slice(1).join(" ")
    const lang = args[0]
    if(!lang) return message.reply("Please mention the ISO code of the language <a:DS_nangis:822036948175814668>")
    if(!txt) return message.reply("Mentioin a text to translate bruh... <a:DS_nofrog:815169579361763339>")
    translate(txt, { to: lang }).then(res => {
        const embed = new discord.MessageEmbed()
        .setAuthor('Translate 🌎')
        .setDescription(res.text)
        .setColor("GREEN")
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        message.channel.send(embed); 
      }).catch(err => {
        message.reply("Please mention a valid ISO code of the language <a:DS_nangis:822036948175814668>")
      });

}
}