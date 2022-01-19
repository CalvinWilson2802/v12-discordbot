const { MessageEmbed } = require("discord.js")
module.exports = {
name: "nuke",
cooldown: '2',
  description: "Literally, just purge a whole message in channel by deletinng the channel",
  usage: "znuke [reason]",
async run (client, message, args){

if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("Cant nuke this channel <a:DS_MachoFroge:815173459105021982>")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setAuthor(`This channel has been nuked by ${message.author.tag}`)
        .setDescription(reason)
        .setImage("https://tenor.com/view/megumin-konosuba-explode-boom-gif-13780914")
        .setFooter(`Nuke`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setTimestamp();
        await newchannel.send(embed)  
      
    }
}