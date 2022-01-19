const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
name: "math",
aliases: "calc",
cooldown: '2',
  description: "Calculate some math problems",
  usage: "zmath [question]",
    async run (client, message, args) {

     if(!args.join(" ")) return message.reply("Give valid question!! <a:DS_nofrog:815169579361763339>")
      
      const embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdna.artstation.com/p/assets/images/images/017/013/774/original/mukul-negi-ezgif-com-video-to-gif-1.gif?1554312589')
      .addField('Question',`\`\`\`${args.join(" ")}\`\`\``)
      .addField('Answer',`\`\`\`${math.evaluate(args.join(""))}\`\`\``)
      .setFooter(`Math`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp()

      message.channel.send(embed)

    } 
}