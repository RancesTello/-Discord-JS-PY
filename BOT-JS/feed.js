module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/QC8EIjjoT1sJKeG9F8/giphy.gif","https://media.giphy.com/media/jSL1OqBwCQ7lI022xu/giphy.gif","https://media.giphy.com/media/SrzurBGYKBELFUDyQS/giphy.gif","https://media.giphy.com/media/L4OUpLANrCtIX5Ttls/giphy.gif","https://media.giphy.com/media/U8GOiDD6678yFBWzku/giphy.gif","https://media.giphy.com/media/mGPvEh9YcZElRmLpZ2/giphy.gif","https://media.giphy.com/media/XBKXXk2jMOp5r4hyf6/giphy.gif","https://media.giphy.com/media/YNE6iOKtXEIRHl6d9D/giphy.gif","https://media.giphy.com/media/gKm5BMaROtE9YEAuZz/giphy.gif","https://media.giphy.com/media/duzwn88VspTiDaq6Cf/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("↭"+user.username+" Le ha dado de comer a "+mencionado.username+" uwu ↭")
.setImage(ran)
.setColor(0x9DFFBB)
.setTimestamp()

message.channel.send(embed)
  }
