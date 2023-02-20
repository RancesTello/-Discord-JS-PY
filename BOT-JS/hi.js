module.exports = (client, message, args) => {  
const Discord = require('discord.js')
let rpts = ["https://media.giphy.com/media/kydKl6geKuKBE9C6Ke/giphy.gif","https://media.giphy.com/media/Y1wSvY2KsYQKBYzsMR/giphy.gif","https://media.giphy.com/media/WpDKHdR5Z3aCTJ2vJb/giphy.gif","https://media.giphy.com/media/RJt1z8zITeiTcxOhjQ/giphy.gif","https://media.giphy.com/media/ZaKawqXLTdeNpV4S3l/giphy.gif","https://media.giphy.com/media/jRRxswum7zv0dtksmY/giphy.gif","https://media.giphy.com/media/VFMUfZ2eTMZaguYTHL/giphy.gif","https://media.giphy.com/media/JPgQJBrKrx6BYNakkQ/giphy.gif","https://media.giphy.com/media/VbsnwS8b4xp1X9mu5p/giphy.gif","https://media.giphy.com/media/fuDqEiynJuFjSmgU1a/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle(":ﾟ:*•: "+user.username+" saluda a todos los gorditos :D :ﾟ:*•:")
.setImage(ran)
.setColor(0xC3FFEB)
.setTimestamp()

message.channel.send(embed)
  }
