const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
    name: "reportbug",
    aliases: ['rb'],
    cooldown: '2',
      description: "Report command's bug to the developer!",
      usage: "zreportbug [description]",
      run: (client, message, args) => {

        const channel = client.channels.cache.get('871582818780725318')
        const query = args.join(" ")

        if(!query) return message.reply(`Please give a description abot the bug that you want to report.. <a:DS_pepe_ngudud:815634075092123649>`)

        message.reply(`Thanks for reporting!. Remember, abusing this command will result in **Blacklisted** from the bot commands <:PepeWhut:779543545370771468> `)
    
        const embed = new discord.MessageEmbed()
        .setTitle('New Bug Reported 📩')
        .addField('・Reported by',`${message.author.username}#${message.author.discriminator} || \`${message.author.id}\``)
        .addField('・Server ID',`${message.guild.name} || \`${message.guild.id}\``)
        .addField('・Description', query)
        .setTimestamp()
        .setFooter('New Bug', client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setThumbnail(message.author.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setColor("#86A2CA")
        channel.send(embed)

      }
    }