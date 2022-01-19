const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require('quick.db');


module.exports = {
  name: "toggle",
  aliases: ["enable", "disable", "command"],
  usage: "ztoggle [command name] [on/off]",
  description: "Enable Or Disable A Command!",
  cooldown: `1`,
  run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>")
    }

        const Name = args[0];
        if (!Name) return message.reply('Please give a command name <a:DS_nofrog:815169579361763339>');

        const cmd = client.commands.get(Name.toLowerCase());

        if (!cmd) return message.reply('I cant find that command <a:DS_nofrog:815169579361763339>');

        const Type = args[1];
        if (!Type) return message.reply('Please give a command type [on/off] <a:DS_nofrog:815169579361763339>');

        let array = ["on", "off"];

        if (!array.find(a => a === Type.toLowerCase())) return message.reply('Invalid Type [on/off] <a:DS_nofrog:815169579361763339>');

        const Current = await db.fetch(`CommandOn_${message.guild.id}_${Name.toLowerCase()}`);
        if (Current && Current.toLowerCase() === Type.toLowerCase()) return message.reply(`Command already ${Current}! <a:DS_nofrog:815169579361763339>`);

        if (Current === null && Type.toLowerCase() === "on") return message.channel.send(`Command already on! <a:DS_nofrog:815169579361763339>`);

        let Upper = Type.charAt(0).toUpperCase() + Type.slice(1);

        await db.set(`CommandOn_${message.guild.id}_${Name.toLowerCase()}`, Type.toLowerCase() === "on" ? null : Upper);

        return message.channel.send(`Command has been ${Upper === "On" ? "Enabled" : "Disabled"} <a:DS_yesfrog:814274287049113670>`);



  }
}