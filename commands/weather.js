const discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
name: "weather",
cooldown: '2',
  description: "Get weather info in a specift location",
  usage: "zweather [location]",
  async run (client, message, args){
    
    
    if(!args.length) {
      return message.reply("Give a location pls!! <:MadDog:772035115966529537>")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#F8C59A")
.setDescription("The temperature unit may be different at one time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Velocity", result[0].current.windspeed, true)//What about image
.addField("Observation time", result[0].current.observationtime, true)
.addField("Wind Sail", result[0].current.winddisplay, true)
.setFooter(result[0].location.name,client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
.setTimestamp()
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.reply(`Is that alien country or something? i cant find that location <a:DS_MachoFroge:815173459105021982>`)
}
});   

    
  }
}