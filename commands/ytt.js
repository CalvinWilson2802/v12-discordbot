const discord = require('discord.js')
const fetch = require('node-fetch')
const { token  } = require('.././config.json');
  module.exports = {
	name: "youtube-together",
  aliases: ['ytt'],
  cooldown: `10`,
  description: `Watch youtube with your friend in a voice channel!.`,
	async run (client, message, args) {
    let channel = message.member.voice.channel;
    if(!channel) return message.reply("You need to be in a voice channel yo start **Youtube Together** <a:DS_nofrog:815169579361763339>")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${token}`,
            "Content-Type": "application/json"
        }
    })
    
    .then(res => res.json())
    .then(invite => {
        if(!invite.code) return message.channel.send("Sadly i cant start a yt together")
        const e = new discord.MessageEmbed()
        .setAuthor('Youtube Together')
        .setColor("RED")
        .addField('Requested by', message.author)
        .setDescription(`To start a **Youtube Together**, make sure to [Click this link](https://discord.com/invite/${invite.code}) while chilling in a voice channel <a:DS_yesfrog:814274287049113670>`)
        .setFooter(`Youtube Together`,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
        .setThumbnail('https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif')
        .setTimestamp();
        message.channel.send(e)
    })
}
  }