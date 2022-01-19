const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const fs = require('fs');
const disbut = require('discord-buttons')(client);
const db = require('quick.db')
const config = require('./config.json');
client.config = config;

client.snipes = new Map();

const loading = ':Loading:';

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

client.on('ready', () => {
  console.log('Hyouka!!');
setInterval(() => client.user.setActivity(`Updating soon, You need to re-invite this bot 😭`, { type: "PLAYING", status: "idle" }), 60000)
})

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))
     for(const file of commandfiles) {
       const command = require(`./commands/${file}`);
       client.commands.set(command.name, command);
     }

     client.on('guildCreate', (guild => {
       let channeltoSend;
       guild.channels.cache.forEach((channel) => {
         if (
           channel.type === "text" &&
           !channeltoSend &&
           channel.permissionsFor(guild.me).has("SEND_MESSAGES")
         ) channeltoSend = channel;

       });

     if(!channeltoSend) return;

     let channelEmbed = new Discord.MessageEmbed()
     .setColor("#b8ee9a")
     .setTitle(`Sup mate <a:kucing:816873467424538654>, thank you for inviting me to ${guild.name}`)
     .setDescription("My prefix is `z`")
     .addField("About me",'Sup, I am `Zlynn` <:ALS_pepeyeaa:846577263977562142>.\u000A You can see my help menu by using `zhelp`.\u000AIf you found some bug, please report it by using `zreportbug (text)`.')
     .addField("Need Help?",'If you had a trouble using `Zlynn`, You can ask a question in my [Support Server](https://discord.gg/F3Rv4sy8Hy) <:SC_yay:845566275030745118>.')
     .setTimestamp()

     channeltoSend.send(channelEmbed).catch(e  => {
       if (e) {
         return
         }});
     }))


client.on('messageDelete', function(message, channel){

  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  });
});

client.on('message', async message => {
    //delete msg afk
  if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
    const oldReason = db.get(`afk-${message.author.id}+${message.guild.id}`)
    await db.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.channel.send(`Welcome back ${message.author}, I removed your AFK`)
  }

  //check afk
  if(message.mentions.members.first()) {
    if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
      message.channel.send(message.mentions.members.first().user.username + "in AFK: " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
    }
  }

const Blacklisted = db.fetch(`blacklistedUsers_${message.author.id}`)
if(message.author.Client || message.author.bot) return;
if(Blacklisted == true ) return
const Whitelisted = db.fetch(`whitelistedUsers_${message.author.id}`)
if(message.author.Client || message.author.bot) return;
if(Whitelisted == true ) return

  if (message.author.bot || !message.content.startsWith(`${prefix}`, 'A.')) return;
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const command = client.commands.get(cmdName)
     || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if (!command) return

    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new Discord.Collection())
    }

    const now = Date.now()
    const timestamps = client.cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 0) * 1000

    if (timestamps.has(message.author.id)) {
        const expirationDate = timestamps.get(message.author.id) + cooldownAmount

        if(now < expirationDate) {
            const timeLeft = (expirationDate - now) / 1000;

            return message.reply(`Please wait for **${timeLeft}** to use the command again <a:DS_nofrog:815169579361763339>`)
         } 
        }

    timestamps.set(message.author.id, now)
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

    try{
        if (command){
        const Allowed = await db.fetch(`CommandOn_${message.guild.id}_${cmdName.toLowerCase()}`);
         if (Allowed !== null) return;
        command.run(client, message, args);
        }
    }catch(error){
        console.error(error)
        return message.channel.send("there was an error executing this command")
    }
  });

client.login(process.env.token); 