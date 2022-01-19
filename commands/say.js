module.exports = {
    name: "say",
    cooldown: '10',
    description: "Send a message",
    usage: "zsay [text]",
    async run (client, message, args){
    
    let text = args.join(" ")
    
    if (
    args.join(' ').includes('@') 
    )  return message.channel.send("brah abusing my say command <:PepeCry:773094745810796575>")
    
    if(!text) return message.reply("Bruh, type something. <a:DS_pepe_ngudud:815634075092123649>")
    
    message.channel.send(text)
    
    message.delete();
    }
    }