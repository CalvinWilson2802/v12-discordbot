const util = require('minecraft-server-util');
const Discord = require('discord.js');
 
module.exports = {
name: "server",
  cooldown: "2",
  aliases: [],
  description: "Send a minecraft server status",
  usage: "zserver [server ip] 25565",
description: 'Send a minecraft server status',
    run: async(client, message, args) => {
        if(!args[0]) return message.reply('Enter a minecraft server ip ok? <a:DS_pepe_ngudud:815634075092123649>');
        if(!args[1]) return message.channel.send('Enter the `25565` number behind the ip with space ok? <a:DS_pepe_ngudud:815634075092123649>');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setAuthor('Minecraft Server Status',"https://cdn.discordapp.com/emojis/785365499664007168.gif?v=1")
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Player(s)', value: response.onlinePlayers},
                {name: 'Max Player(s)', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setTimestamp()
            .setFooter("Minecraft Server",client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048");
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.reply('Is that fortnite server?, I cant find that server <a:DS_MachoFroge:815173459105021982>');
            throw error;
        })
    }
}