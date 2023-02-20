module.exports = (client, message, args) => { 
const Discord = require('discord.js') 
  let ping = Math.floor(client.ws.ping); 
  
    message.channel.send(":ping_pong: bong!")
  .then(m => {
      
      if (ping > 300) {
    let embed = new Discord.MessageEmbed()
    .setDescription(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
    .setColor('RANDOM')
    
setTimeout(function(){m.edit(embed)}, 750)
   
} else if (ping > 150) {
    let embed = new Discord.MessageEmbed()
    .setDescription(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
    .setColor('RANDOM')

setTimeout(function(){m.edit(embed)}, 750)
  
} else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
    .setColor('RANDOM')
 
    setTimeout(function(){m.edit(embed)}, 750)
    }
      

})
}