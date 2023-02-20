module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
const bot = new Discord.Client()
let user = message.mentions.users.first() || client.users.cache.find(r => r.id == args[0]) || client.users.cache.find(r => r.name == args.join(" "))
  || message.author
      
const embed = new Discord.MessageEmbed()
  .setImage(user.displayAvatarURL({size: 2048, dynamic: true }))
  .setColor(message.guild.member(user).displayHexColor)
  .setFooter((message.author == user)?`Tu avatar ${user.tag}`:`Avatar de ${user.tag}`);
  
message.channel.send({embed: embed});

}