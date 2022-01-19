const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
name: "whois",
aliases: ['userinfo'],
cooldown: '2',
  description: "Gives member/user information",
  usage: "zwhois [user]",

 async run (client, message, args){
    const flags = {
        DISCORD_EMPLOYEE: 'Discord Employee',
        DISCORD_PARTNER: 'Discord Partner',
        BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
        BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
        HYPESQUAD_EVENTS: 'HypeSquad Events',
        HOUSE_BRAVERY: 'House of Bravery',
        HOUSE_BRILLIANCE: 'House of Brilliance',
        HOUSE_BALANCE: 'House of Balance',
        EARLY_SUPPORTER: 'Early Supporter',
        TEAM_USER: 'Team User',
        SYSTEM: 'System',
        VERIFIED_BOT: 'Verified Bot',
        VERIFIED_DEVELOPER: 'Verified Bot Developer'
    };
    
    const member = message.mentions.members.last() || message.member;

        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const userFlags = member.user.flags.toArray();
        const embed = new Discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(member.displayHexColor || 'BLUE')
            .setAuthor(member.user.username, member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addField("Name",`${member.user}`,true)
            .addField('Registered', `${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')}`, true)
            .addField('Joined', `${moment(member.joinedAt).format('LL LTS')}`, true)
            .addField('Flags', `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`, true)
            .addField('Highest Role', `${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`)
            .addField(`Roles [${roles.length}]`, `${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                `\u200b`)

            .setFooter(`ID:${member.id}, Discriminator: ${member.user.discriminator}`)
            .setTimestamp()
        return message.channel.send(embed);
    }

};