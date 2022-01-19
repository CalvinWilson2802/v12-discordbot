const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
name: "changemymind",
  cooldown: "2",
  aliases: ["cmm"],
  description: "Send a `Change My Mind` meme",
  usage: "zchangemymind [text]",
    run: async(client, message, args) => {
    const text = args.join(" ");

    if (!text) return message.reply("Please type something <a:DS_pepe_ngudud:815634075092123649>");

    const sendMsg = await message.reply("Processing the image <a:DS_pepe_ngudud:815634075092123649>");

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`
    ).then((res) => res.json());

    sendMsg.delete();
    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("RANDOM")
      .setDescription(
        `[Click here if the image failed to load.](${data.message})`
      )
      .setImage(data.message)
      .setFooter(`ChangeMyMind`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setTimestamp();


    message.lineReplyNoMention({ embed });
  },
    }