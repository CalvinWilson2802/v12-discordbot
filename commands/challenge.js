const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
name: "challenge",
  cooldown: "2",
  aliases: ["cc"],
  description: "Send a minecraft `Challenge Complete` picture",
  usage: "zchallenge [text]",
description: 'Gives minecraft `Challeng Complete` text',
    run: async(client, message, args) => {
    const text = args.join(" ");

    if (!text) return message.reply("type something pleasee <a:DS_pepe_ngudud:815634075092123649>");

    const sendMsg = await message.reply("Processing the image  <a:DS_pepe_ngudud:815634075092123649>");


    sendMsg.delete();
       let emb = new MessageEmbed()
     .setColor("#8af3f0")
     .setImage(`https://api.cool-img-api.ml/challenge?text=${args.join("+")}`) 
     message.channel.send(emb)
  }
    }