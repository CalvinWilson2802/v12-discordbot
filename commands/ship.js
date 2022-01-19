const discord = require('discord.js')
const Canvas = require('canvas')
    

module.exports = {
name: "ship",
cooldown: '2',
description: "Send a love percentage with canvas",
usage: "zsay [text]",
async run (client, message, args){
    
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext("2d")

    const target = message.mentions.users.first()
    if(!target) return message.reply("Mention someone please <a:DS_pepe_ngudud:815634075092123649>")
    if(target.id == message.author.id) return message.reply("Please mention someone else <a:DS_nangis:822036948175814668>")

    const bg = await Canvas.loadImage("https://i.pinimg.com/originals/d5/94/34/d5943460d6ec066d83a9838745df7742.jpg")
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL( { format: 'png' } ))
    ctx.drawImage(avatar, 100, 25, 200, 200)

    const TargetAvatar = await Canvas.loadImage(target.displayAvatarURL( { format: "png" } ))
    ctx.drawImage(TargetAvatar, 400, 25, 200, 200)


    const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png')
    const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png')
    const random = Math.floor(Math.random() * 99) + 1

    if(random >= 50) {
        ctx.drawImage(heart, 275, 60, 150, 150)
        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'love.png')
        const embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username} + ${target.username} = ${random}%`,"https://media1.giphy.com/media/2WGYAuTdL8QVrieThE/giphy.gif")
        .attachFiles(attachment)
        .setImage(`attachment://love.png`)
        .setColor("GREEN")
        return message.channel.send(embed)

    } else {
        ctx.drawImage(broken, 275, 60, 150, 150)
        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'broken.png')
        const embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username} + ${target.username} = ${random}%`,"https://media.giphy.com/media/3og0IvVLi7CLtqetlC/giphy.gif")
        .attachFiles(attachment)
        .setImage(`attachment://broken.png`)
        .setColor("RED")
        return message.channel.send(embed)

    }

}
}