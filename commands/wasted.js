const Discord = require('discord.js');//npm i discordjs@12.2.0 
require("discord-reply");
const client = new Discord.Client();
const superagent = require('superagent'); //npm i superagent
const canvas = require('canvas')

module.exports = {
name: "wasted",
cooldown: '2',
  description: "Gives your friends avatar with wasted effect",
  usage: "zwasted [user]",
  run: (client, message, args) => {
    let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            if (!Member) return message.reply("Give a valid user <:MadDog:772035115966529537>")

            let Embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(`https://some-random-api.ml/canvas/wasted?avatar=${Member.user.displayAvatarURL({ format: "png" })}`)
                .setFooter(`Wasted`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
                .setTimestamp();

            return message.lineReplyNoMention(Embed);
    }
}