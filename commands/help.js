const discord = require('discord.js')
const { MessageButton, MessageActionRow} = require("discord-buttons")
const { MessageEmbed} = require("discord.js")
const { prefix } = require('../config.json')

module.exports = {
    name: 'help',
    aliases: [`h`],
    description: "ya help lah goblok",
    run: async(client, message, args) => {

      const member = message.mentions.members.last() || message.member;
      const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1); 

    const embed = new discord.MessageEmbed()
    .setAuthor("Zlynn Help Menu","https://cdn.discordapp.com/attachments/842967536256942083/856031207937802260/MOSHED-2021-6-20-11-42-11.gif")
    .setColor(member.displayHexColor || "#B8DEB4")
    .setThumbnail("https://cdn.discordapp.com/attachments/842967536256942083/856031207937802260/MOSHED-2021-6-20-11-42-11.gif")
    .setDescription(`**・My prefix is \`${prefix}\`**\u000A**・If you found some bug, please report it using \`zreportbug [description]\`\u000A **・Use \`zhelp (commandname)\` to get more command information!\u000A**・Command list :**`)
    .addField("➳ <a:SC_pepeSimp:850269137603395595>・Images",`\`wasted\`,\`changemymind\`,\`magik\`,\`challenge\`.`)
    .addField("➳ <a:SC_PepeGoose:850267564738478100>・Utility","\`whois\`,\`avatar\`,\`snipe\`,\`ping\`,\`math\`,\`weather\`,\`server\`,\`say\`,\`lyric\`,\`translate\`, `afk`,`youtube-together`.")
    .addField("➳ <a:DS_popcat2:814418693424414741>・Fun Commands",'\`playstore\`,\`howgay\`,\`meme\`,\`tictactoe\`,\`ship\`.')
    .addField("➳ <a:bear_police:836145442089336872>・Moderation",'\`announce\`,\`clear\`,\`nuke\`,\`lock\`,\`unlock\`,\`toggle\`, `kick`, `ban`,`unban`,`memberclear`')
    .addField("➳ <:bluecrown:895220379470139442>・Owner Commands",'\`blacklist\`,\`whitelist\`,\`eval\`.')
    .setFooter(`Help`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
    .setTimestamp();

   const btn1 = new MessageButton()
   .setStyle('url')
   .setURL('https://discord.com/oauth2/authorize?client_id=807441180181921792&scope=bot&permissions=2147483647') 
   .setLabel('Invite me :3') 
   .setEmoji('🔗')

  const btn2 = new MessageButton()
   .setStyle('url')
   .setURL('https://discord.gg/Qev2exTvMd') 
   .setLabel('Support Server ;o')
   .setEmoji('🚨')


    const yes = new MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)

    if (!args.length) return message.channel.send(`**Haii <a:ALS_haloo:856448889895518218> ${message.author}, <a:pepehappy:798447874458517514>**` ,{
      embed: embed,
      component: yes
    })

      let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.commands.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(member.displayHexColor || "#9ef09b")
      .setTitle(`Command: ${cmd.name}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 })
)
      .setDescription(`> ${cmd.description}`)
      .addField(`Alias(es)`, cmd.aliases || "No Aliases")
      .addField(`Usage(s)`, cmd.usage || "No Usage")
      .setFooter(`Help`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    }
      }

    } 