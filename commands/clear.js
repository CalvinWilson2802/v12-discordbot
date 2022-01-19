const { MessageEmbed } = require("discord.js")
module.exports = {
name: "clear",
cooldown: '2',
  description: "Clear some message in a specify channel",
  usage: "zclear [amount]",
    run: async (client, message, args) => {
         if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Imagine no perms <a:DS_adogelele:819922349641695292>")
        }
      
        if(!args[0]) return message.reply('Enter the amount of message that you want to clear <a:DS_pepe_ngudud:815634075092123649>');
        if(isNaN(args[0])) return message.reply('Enter a valid number <a:DS_pepe_ngudud:815634075092123649>');

        if(args[0] > 500) return message.reply('You cant delete more than 500 messages <a:DS_pepe_ngudud:815634075092123649>');
        if(args[0] < 1) return message.reply('You need atleast purge 1 message <a:DS_pepe_ngudud:815634075092123649>');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{

            message.channel.bulkDelete(messages);
        });
    }
}