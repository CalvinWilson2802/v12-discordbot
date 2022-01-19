const discord = require('discord.js')

module.exports = {
    name: "memberclear",
    aliases: "memclear",
    cooldown: '2',
      description: "Purge member messages with amount",
      usage: "zmemberclear [user] [amount]",
        async run (client, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Imagine no perms <a:DS_adogelele:819922349641695292>")
    let member = message.mentions.members.first()
    let amount = args[1]
    if(!member) return message.channel.send("Mention a user to clear <a:Walter:861224718010023947>")
    if(!amount) return message.channel.send("Enter the amount of message that you want to clear <a:DS_pepe_ngudud:815634075092123649>")
    if(isNaN(amount)) return message.channel.send("Enter a valid number <a:DS_pepe_ngudud:815634075092123649>")
    if(amount > 100) return message.channel.send("You cant purge more than 100 messages <a:DS_pepe_ngudud:815634075092123649>")
    let AllMessages = await message.channel.messages.fetch()
    let FilteredMessages = await AllMessages.filter(x => x.author.id === member.id)
    let deletedMessages = 0
    FilteredMessages.forEach(msg => {
        if(deletedMessages >= amount) return
        msg.delete()
        deletedMessages++
    })

}
}