const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
  name: "unban",
  usage: 'unban <@user>',
  description: "unban user from the server",
  cooldown: 3,

  async run (client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:no_entry: This command can only be used by staff members [ ${message.author} ]`)
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have permission to charge members :/')


    let userID = args[0]

    const kosongembed = new Discord.MessageEmbed()
        .setTitle('Unban command')
        .setDescription(`
        **Description:** Unban user from the server\n
        **Usage:** ${prefix}unban [user id]\n
        **Example:** ${prefix}unban @user
        `)
        .setColor('RED')

    if(!args[0]) return message.channel.send(kosongembed)

        const embed = new Discord.MessageEmbed()
    .setDescription(`:white_check_mark: Successfully unbanning ${args[0]}`)
    .setColor('GREEN')

    message.guild.fetchBans().then(async bans => {
      if(bans.size === 0) return message.channel.send(`This server does not have ban anymore`)
      let bUser = bans.find(b => b.user.id == userID)
      if (!bUser) return message.channel.send('users with this id are not banned')
      await message.guild.members.unban(bUser.user).catch(err => {
        console.Log(err);
        return message.channel.send('Somethimes went wrong unbanning users with this id')
      }).then(() => {
        message.channel.send(embed)
      })
    })
}
}