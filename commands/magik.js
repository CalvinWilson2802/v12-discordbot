const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
require("discord-reply");
const client = new Discord.Client();

module.exports = {
name: "magik",
cooldown: '2',
  description: "Make ur friends avatar cursed 😅",
  usage: "zmagik [user]",
  run:async (client, message, args) => {
let useio = message.mentions.users.first() || message.author
    let imgo = useio.displayAvatarURL({size: 2048, format: 'jpg'})
    console.log(imgo)
    message.reply('Wait for a few seconds <a:DS_unyu:824687492803330069>')

	fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imgo}&intensity=2`) .then(res => res.json())
   .then(data => {

   let emb = new MessageEmbed()
     .setColor("RANDOM")
     .setImage(data.message) /**Getting the Magik image link from we*/
      .setFooter(`Magik`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp();
     message.lineReplyNoMention(emb)
   }) 	
  }
}